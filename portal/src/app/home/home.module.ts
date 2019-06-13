import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgC3Module } from '../shared/c3.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgC3Module
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
