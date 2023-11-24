import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { RestReponse } from 'src/app/core/interfaces/rest-response';
import { environment } from 'src/environments/environment.development';
import { CategorieResponse } from '../interfaces/response/all';

@Injectable()
export class CategorieService {
  limit: number=2
  constructor(private http: HttpClient) { }

  private uri: string = "categories"
  // private apiUrl = environment.api.url


  all(url?:string): Observable<RestReponse<CategorieResponse[]>> {
    // console.log(this.apiUrl);
    
    url = url??`${environment.api.url}/${this.uri}?limit=0${this.limit}`
    // console.log(environment);
    
    return this.http.get<RestReponse<CategorieResponse[]>>(url).pipe(
      tap(response => console.log(response),
        catchError(this.handleError)
      )
    )
  }

  store() { }

  update() { }

  delete() { }

  byLibelle() { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
