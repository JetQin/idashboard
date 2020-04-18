import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { NzTableModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminLayoutRoutingModule,
    NzTableModule
  ]
})
export class AdminLayoutModule { }
