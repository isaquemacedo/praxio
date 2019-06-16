import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.config';

@Component({
  selector: 'praxio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  AppSettings = AppSettings

  constructor() { }

  ngOnInit() {
  }

}
