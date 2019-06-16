import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortalRoutingModule } from './portal.routing';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
