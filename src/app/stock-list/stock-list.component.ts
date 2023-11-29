import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['../css/styles.css']
})
export class StockListComponent {
    
  followedStocks: string[] = ['ACME', 'STRK'];
  dropDown: boolean = false;


  getDropdown()
  {
    this.dropDown = true;
    console.log(`there are ${this.followedStocks.length} in this list`);
  
  }
}