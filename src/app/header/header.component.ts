import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.config';

@Component({
  selector: 'praxio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  AppSettings = AppSettings

  constructor() { }

  ngOnInit() {
  }

}
