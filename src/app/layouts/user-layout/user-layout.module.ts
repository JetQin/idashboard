import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    ComponentsModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class UserLayoutModule { }
