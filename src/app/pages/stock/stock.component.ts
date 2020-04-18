import { Component, OnInit } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  loading = false;
  listOfStock: Array<Stock>;

  // forceFit = true;
  // data = [];
  // dv = [];
  // start = '2015-07-07';
  // end = '2015-07-28';
  // scales = {time: { type: 'timeCat', nice: false}};
  // scale1 = [
  //   { dataKey: 'time', type: 'timeCat', nice: false, range: [ 0, 1 ]},
  //   { dataKey: 'trend', values: [ '上涨', '下跌' ]},
  //   { dataKey: 'volumn', alias: '成交量'},
  //   { dataKey: 'start', alias: '开盘价'},
  //   { dataKey: 'end', alias: '收盘价'},
  //   { dataKey: 'max', alias: '最高价'},
  //   { dataKey: 'min', alias: '最低价'},
  //   { dataKey: 'range', alias: '股票价格'}];
  //
  // scale2 = [{ dataKey: 'volumn', tickCount: 2}];
  //
  // tooltipOpts = {
  //   showTitle: false,
  //   itemTpl: '<li data-index={index}>'
  //     + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
  //     + '{name}{value}</li>',
  // };
  //
  // candleOpts = {
  //   color: ['trend', val => {
  //     if (val === '上涨') {
  //       return '#f04864';
  //     }
  //
  //     if (val === '下跌') {
  //       return '#2fc25b';
  //     }
  //   }],
  //   tooltip: ['time*start*end*max*min', (time, start, end, max, min) => {
  //     return {
  //       name: time,
  //       value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
  //         + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
  //         + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
  //         + '<span style="padding-left: 16px">最低价：' + min + '</span>'
  //     };
  //   }],
  // };
  //
  // axis1Opts = {
  //   label: {
  //     formatter: val => {
  //       return parseInt(String(val / 1000), 10) + 'k';
  //     }
  //   }
  // };
  //
  // barOpts = {
  //   color: ['trend',  val => {
  //     if (val === '上涨') {
  //       return '#f04864';
  //     }
  //
  //     if (val === '下跌') {
  //       return '#2fc25b';
  //     }
  //   }],
  //   tooltip: ['time*volumn', (time, volumn) => {
  //     return {
  //       name: time,
  //       value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
  //     };
  //   }]
  // };


  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.listStock();
    // this.stockService.loadData('assets/stock.json').subscribe(resp => {
    //   this.data = resp;
    //   // @ts-ignore
    //   this.dv = this.getData();
    // });
  }


  addToFavour(event: any) {
    console.log(event);
  }

  listStock() {
    this.stockService.listStock()
      .subscribe(result => this.listOfStock = result);
  }

  // slideChange = (opts: any) => {
  //   this.start = opts.startText;
  //   this.end = opts.endText;
  //   // @ts-ignore
  //   this.dv = this.getData();
  // }
  //
  // getData = () => {
  //   const { start, end, data } = this;
  //   const ds = new DataSet({
  //     state: {
  //       start,
  //       end,
  //     }
  //   });
  //   const dv = ds.createView();
  //   dv.source(data)
  //     .transform({
  //       type: 'filter',
  //       callback: obj => {
  //         const date = obj.time;
  //         return date <= end && date >= start;
  //       }
  //     })
  //     .transform({
  //       type: 'map',
  //       callback: obj => {
  //         obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
  //         obj.range = [ obj.start, obj.end, obj.max, obj.min ];
  //         return obj;
  //       }
  //     });
  //   return dv;
  // }
}
