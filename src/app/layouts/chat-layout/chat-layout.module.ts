import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatLayoutRoutingModule } from './chat-layout-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ComponentsModule} from '../../components/components.module';
import {StockComponent} from '../../pages/stock/stock.component';
import {CompanyComponent} from '../../pages/company/company.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';


@NgModule({
  declarations: [ StockComponent, CompanyComponent, DashboardComponent ],
  imports: [
    CommonModule,
    ChatLayoutRoutingModule,
    ComponentsModule,
    NgZorroAntdModule
  ]
})
export class ChatLayoutModule { }
