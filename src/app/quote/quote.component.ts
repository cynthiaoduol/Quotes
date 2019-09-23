import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    {text:'Aspire to inspire before you expire', author:'Rex Hans', submitter:'Faith'},
    {text:'Aspire to inspire before you expire', author:'Rex Hans', submitter:'Faith'},
    {text:'Aspire to inspire before you expire', author:'Rex Hans', submitter:'Faith'}, 
  ];

  delete(i) {
    this.quotes.splice(i, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
