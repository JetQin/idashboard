import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements OnInit {

  public menus = [
    {name: 'User', icon: 'user'},
    {name: 'Setting', icon: 'setting'},
    {name: 'Logout', icon: 'logout'},
  ];

  public user = 'Jet Qin999';

  public avatarUrl = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';

  constructor() { }

  ngOnInit() {
  }

  handleMenuClick(event) {
    console.log(event);
  }

}
