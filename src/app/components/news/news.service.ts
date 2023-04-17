import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(data:any){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${data}&apiKey=f4b468b300fb4dfc903eed822f365eae`).pipe(catchError(this.handleError));
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
