import { Component, OnInit } from '@angular/core';
import { ActionSave } from '../../shared/enums/action-save';
import { CategorieService } from '../../shared/services/categorie.service';
import { CategorieResponse } from '../../shared/interfaces/response/all';
import { RestReponse } from 'src/app/core/interfaces/rest-response';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  mode: ActionSave = ActionSave.Add
  loader:boolean = true
  dataList:RestReponse<CategorieResponse[]> = <RestReponse<CategorieResponse[]>>{}
  dataRemove:CategorieResponse[] = []
  url?:string
  checkAll:boolean = false
  constructor(private catServ: CategorieService){
  
  }
  ngOnInit(): void {
    this.catServ.limit=2
    this.refresh()
  }
  onChangeMode(checkMode: HTMLInputElement) {
    if (!checkMode.checked) {
      this.mode = ActionSave.Add;
    } else {
      this.mode = ActionSave.Edit;
    }
  }

  onPaginate(url: string){
    this.url = url
    this.refresh()
  }

  onAddArrayRemove(event:Event,cat:CategorieResponse){
    const inputCheckRemove = event.target as HTMLInputElement
    this.dataRemove.push(cat)
    if(!inputCheckRemove.checked){
      this.dataRemove = this.dataRemove.filter(elt => elt.id != cat.id)
    }else{
      this.checkAll = this.dataList.data.length == this.dataRemove.length
    }
  }
  onRemoveAll(checkAll:HTMLInputElement) {
    this.dataRemove = []
    this.checkAll = false
    if (checkAll.checked) {
      this.dataRemove = [...this.dataList.data]
      this.checkAll = false
    }
  }

  private refresh(){
    console.log(this.url);
    this.catServ.all(this.url).subscribe(
      
      {
        next:(res:RestReponse<CategorieResponse[]>) => {
          this.loader = true
          this.dataList = res
        },
        complete:() => {
          this.loader = false
        }
      }
    )
  }
}
