import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote('Aspire to inspire before you expire', 'Rex Hans', 'Faith'),
    new Quote('Aspire to inspire before you expire', 'Rex Hans', 'Fadhul'),
    new Quote('Aspire to inspire before you expire', 'Rex Hans', 'Ian'),
  ];

  delete(i) {
    this.quotes.splice(i, 1)
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length
    quote.text=quote.text;
    quote.author=quote.author;
    quote.submitter=quote.submitter;

    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
