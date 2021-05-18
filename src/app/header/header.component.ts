import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter;
  quote: any;
  author: any;
  publisher: any;
  vote: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.publisher){
      alert('please write the publishers name');
      return
    }

    const newQuote = {
      publisher: this.publisher,
      author: this.author,
      quote: this.quote,
      vote: this.vote
    };

    this.onAddQuote.emit(newQuote)

    this.publisher = '';
    this.author = '';
    this.quote = '';
    this.vote = 0;
  }

}
