import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.config';

@Component({
  selector: 'praxio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AppSettings = AppSettings

  constructor() { }

  ngOnInit() {
  }

}
