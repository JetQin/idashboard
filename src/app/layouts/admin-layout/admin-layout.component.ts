import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  @Input() isCollapsed = true;
  private currentMenu: string;

  menus = [
    { name: 'Dashboard', link: 'dashboard', icon: 'dashboard'},
    { name: 'Setting', link: 'stock', icon: 'setting'},
    { name: 'Profile', link: 'company', icon: 'profile'},
  ]
  constructor() { }

  ngOnInit() {
  }

  collapseSidebar(collapse: boolean) {
    this.isCollapsed = collapse;
  }

  handleMenuClick(event) {
    this.currentMenu = event.el.innerText;
  }

  handlePowerOff() {
    console.log('power off');
  }

}
