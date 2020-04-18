import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url + '/stock';
  }

  public loadData(file: string): any {
    return this.http.get(file);
  }

  public listStock(): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(this.url + '/list');
  }

  public searchStock(keywords: string): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(this.url + '/' + keywords);
  }

  public findByCode(code: string): Observable<Stock> {
    return this.http.get<Stock>(this.url + '/code/' + code);
  }

  public findByName(name: string): Observable<Stock> {
    return this.http.get<Stock>(this.url + '/name/' + name);
  }

}
