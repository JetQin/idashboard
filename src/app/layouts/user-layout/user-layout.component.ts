import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  isCollapsed = true;
  @Input() isLogin = false;
  public currentMenu: string;

  menus = [
    { name: 'Dashboard', link: 'dashboard', icon: 'dashboard'},
    { name: 'Setting', link: 'stock', icon: 'setting'},
    { name: 'Company', link: 'company', icon: 'profile'},
  ]
  constructor() { }

  ngOnInit() {}

  handleMenuClick(menu: string) {
    this.currentMenu = menu;
  }

  handlePowerOff() {
    console.log('power off');
    this.isLogin = !this.isLogin;
  }

}
