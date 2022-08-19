import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map  } from 'rxjs/operators'

export interface Items<T> {
  isLoading: boolean;
  value?: T;
  error?: HttpErrorResponse | Error;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL: string = "https://api.github.com/";
  baseURLSearch: string = "https://api.github.com/search/repositories?q=";
  data: any;
  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  searchItems(query: string){
    return this.http.get<any>(this.baseURLSearch + query, {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }).pipe(
      map((value) => (
        this.data = value.items,
        {isLoading: false, value}
        )),
      retry(4), // retry a failed request up to 4 times
      catchError(this.handleError), // then handle the error
    )
  }
}
