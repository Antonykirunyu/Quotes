import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/quote';
import { TimeCountPipe} from 'src/app/time-count.pipe';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;

  constructor() { }

  ngOnInit() {
  }

}