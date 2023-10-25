import { Component } from '@angular/core';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['../css/styles.css']
})
export class StockListComponent {
    
  followedStocks: any[] = ['ACME', 'STRK'];

}