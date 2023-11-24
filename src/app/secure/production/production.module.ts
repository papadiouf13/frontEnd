import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieService } from '../shared/services/categorie.service';


@NgModule({
  declarations: [
    ProductionComponent,
    CategorieComponent
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    // HttpClientModule
  ],
  providers: [
    CategorieService
  ]
})
export class ProductionModule { }
