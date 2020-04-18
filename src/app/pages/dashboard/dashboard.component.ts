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
  indexs = [
    {  title: '上证指数'},
    {  title: '深证指数'},
    {  title: '创业板指'},
    {  title: '科技板指'},
  ];

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
