import { Component, OnInit } from '@angular/core';
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

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }
}
