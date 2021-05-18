import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Ann','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,4,15),0,0),
    new Quote (1,'Ann','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,4,15),0,0),

  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
