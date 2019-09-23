import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  @Output() collapsed = new EventEmitter<boolean>();
  username: any = 'Jet Qin';

  userMenu = [
    { name: 'Profile', icon: 'user'},
    { name: 'Setting', icon: 'setting'},
    { name: 'Logout', icon: 'logout'}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  collapseHeader() {
    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
  }

  gotoProfile() {
    this.router.navigate(['/profile']);
  }

  gotoSetting() {
    this.router.navigate(['/setting']);
  }

  logout() {
    console.log('logout');
  }
}

