import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './auth/interceptor.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Interceptor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
