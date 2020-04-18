import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterComponent } from './footer/footer.component';
import { LangDropdownComponent } from './lang-dropdown/lang-dropdown.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { NotifyDropdownComponent } from './notify-dropdown/notify-dropdown.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LangDropdownComponent,
    HeaderDropdownComponent,
    NotifyDropdownComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
