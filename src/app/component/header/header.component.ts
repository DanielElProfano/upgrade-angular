import { Component, OnInit } from '@angular/core';
import { Iheader } from './Iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  menu : Iheader | any = {};

  constructor() { 

    this.menu.home = "home"
    this.menu.men = "men"
    this.menu.women= "women"
    this.menu.contact= "contact"
  }

  ngOnInit(): void {
  }
 


}
