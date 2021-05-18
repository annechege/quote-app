import { Component } from '@angular/core';
import { Quote } from './quote';
import { QuoteService} from '../app/services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote-app';

  addQuote(quote: Quote){
    this.QuoteService
  }
}
