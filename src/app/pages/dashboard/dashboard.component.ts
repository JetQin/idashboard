import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  code: string;
  suggestions: Array<string> = [];
  listOfStock: Array<Stock>;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.listStock();
  }


  onInput(event): void {
    console.log('autocomplete suggestion');
    this.suggestions = [];
    this.stockService.searchStock(this.code)
      .subscribe( result => {
        if (!result) {
          this.suggestions.push('No suggestions');
        }
        result.forEach(item => {
          this.suggestions.push(item.name);
        });
      });
  }

  listStock() {
    this.stockService.listStock()
      .subscribe(result => this.listOfStock = result);
  }

  findByCode() {
    console.log('search code:' + this.code);
    if (this.code) {
      this.stockService.searchStock(this.code)
        .subscribe( result => this.listOfStock = result);
    } else {
      this.listStock();
    }
  }

}
