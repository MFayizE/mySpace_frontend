import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  Api = 'http://localhost:5000/api'
  constructor(private http:HttpClient) { }

  getAllContacts(page:any,limit:any,search:any){
    if(search!==undefined){
      return this.http.get(`${this.Api}/contacts?page=${page}&limit=${limit}&search=${search}`).pipe(catchError(this.handleError));
    }
    else{
    return this.http.get(`${this.Api}/contacts?page=${page}&limit=${limit}`).pipe(catchError(this.handleError));
  }
  }

  deleteContact(data){
    return this.http.delete(`${this.Api}/contacts/${data}`).pipe(catchError(this.handleError));
  }
  editContact(id,data){
    return this.http.put(`${this.Api}/contacts/${id}`,data).pipe(catchError(this.handleError));
  }
  addContact(data:any){
    return this.http.post(`${this.Api}/contacts`,data).pipe(catchError(this.handleError));
  }
  getContactbyId(data){
    return this.http.get(`${this.Api}/contacts/${data}`).toPromise(); 
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
