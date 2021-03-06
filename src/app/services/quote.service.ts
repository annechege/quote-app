import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from '../quote';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:5000/quotes';

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(this.apiUrl)
  }

  deleteQuote(quote: Quote): Observable<Quote>{
    const url = `${this.apiUrl}/${quote.id}`;
    return this.http.delete<Quote>(url);
  }

  addQuote(quote: Quote): Observable<Quote>{
    return this.http.post<Quote>(this.apiUrl, quote, httpOptions)
  }
}
