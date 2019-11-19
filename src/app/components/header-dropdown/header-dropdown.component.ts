import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements OnInit {

  private menus = [
    {name: 'User', icon: 'user'},
    {name: 'Setting', icon: 'setting'},
    {name: 'Logout', icon: 'logout'},
  ];

  private user = 'Jet Qin999';

  private avatarUrl = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';

  constructor() { }

  ngOnInit() {
  }

  handleMenuClick(event) {
    console.log(event);
  }

}
