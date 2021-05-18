import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QUOTE } from '../mock-quote';
import { Quote } from '../quote';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  quotes: Quote[] = [];
  faTimes = faTimes;
  @Output() onDeleteQuote: EventEmitter<Quote> = new EventEmitter

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }

  onDelete(quote: any){
    this.onDeleteQuote.emit(quote)
  }
}
