import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify-dropdown',
  templateUrl: './notify-dropdown.component.html',
  styleUrls: ['./notify-dropdown.component.scss']
})
export class NotifyDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(event) {
    console.log(event);
  }
}
