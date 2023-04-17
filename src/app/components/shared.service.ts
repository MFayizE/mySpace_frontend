import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  Api = 'http://localhost:5000/api/users/me'

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.Api}`).pipe(catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error;
    }
    return throwError(errorMessage);
  }
}
