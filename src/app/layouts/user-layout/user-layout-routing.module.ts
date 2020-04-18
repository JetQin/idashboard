import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {StockComponent} from '../../pages/stock/stock.component';
import {CompanyComponent} from '../../pages/company/company.component';


const routes: Routes = [
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'stock',        component: StockComponent },
  { path: 'company',      component: CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
