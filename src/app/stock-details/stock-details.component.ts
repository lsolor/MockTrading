import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['../css/styles.css']
})
export class StockDetailsComponent {
  @Input() Stock: any;
}
