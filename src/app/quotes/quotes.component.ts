import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import {getFullYear, getMinutes, getSeconds} from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  // It maintains quote Model
  quoteModel: Quote;

// It maintains quote form display status. By default it will be false.
  showNew: Boolean = false;

// It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // This method associate to New Button.
  onNew() {
    // Initiate new quote.
        this.quoteModel = new Quote("", "", "", new Date(), 0, 0);
    // Change submitType to 'Save'.
        this.submitType = 'Save';
    // display quote entry section.
        this.showNew = true;
      }
    
    // This method associate to Save Button.
      onSave() {
        if (this.submitType === 'Save') {
    // Push quote model object into quote list.
          this.quotes.push(this.quoteModel);
        }
    // Hide quote entry section.
        this.showNew = false;
      }
    
    // This method associate to Cancel Button.
      onCancel() {
    // Hide quote entry section.
        this.showNew = false;
      }
    
      quotes = [
        new Quote('Talk is cheap. Show me the code.', 'Jacob Red', 'Samuel Kingstone . C', new Date(2017, 9, 23, 23, 1), 0, 0),
        new Quote('Coding is not for weaklings!', 'Antony Mighty', 'Edith Ann', new Date(2019, 9, 23, 23, 1), 0, 0),
        new Quote('Programs must be written for people to read, and only incidentally for machines to execute.', 'Maxwell Ndept', 'Ephantus Rret', new Date(2015, 4, 27, 23, 5), 0, 0),
        new Quote('Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', 'Steven Jyden', 'Adam Okwanko', new Date(20200, 1, 27, 23, 8), 0, 0),
        new Quote('Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Blake Cruise', 'Solomon Sam', new Date(2019, 4, 28, 7, 42), 0, 0),
        new Quote('Truth can only be found in one place: the code.', 'Benjamin Handerson', 'Antony Thompson', new Date(2017, 4, 28, 7, 43), 0, 0),
        new Quote('It is hard to fail, but it is worse never have tried to succeed.', ' Roosevelt. C. Joseph', 'Mohammed Sallet', new Date(2018, 4, 28, 7, 45), 0, 0),
        new Quote(' Walking on water and developing software from a specification are easy if both are frozen. ', 'Steve Austins ', 'Scot Adkins', new Date(2019, 6, 28, 7, 49), 0, 0)
    
      ];
      delete(i) {
        this.quotes.splice(i, 1);
          }
    

  constructor() { }

  ngOnInit() {
  }

}
