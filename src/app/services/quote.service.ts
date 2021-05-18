import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:5000/quotes';

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(this.apiUrl)
  }
}
