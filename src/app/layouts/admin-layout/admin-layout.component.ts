import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  @Input() isCollapsed = true;

  menus = [
    { name: 'Dashboard', icon: 'dashboard'},
    { name: 'License Manage', icon: 'profile'},
    { name: 'Contract Manage', icon: 'profile'},
    { name: 'Profile', icon: 'profile'},
    { name: 'Setting', icon: 'setting'},
    { name: 'Profile', icon: 'profile'},
  ]
  constructor() { }

  ngOnInit() {
  }

  collapseSidebar(collapse: boolean) {
    this.isCollapsed = collapse;
  }

  handleMenuClick(event) {
    console.log(event);
  }

}
