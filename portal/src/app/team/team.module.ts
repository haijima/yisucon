import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';

import { EditComponent } from './edit/edit.component';
import { NgC3Module } from '../shared/c3.module';

@NgModule({
  imports: [
    SharedModule,
    TeamRoutingModule,
    NgC3Module
  ],
  declarations: [
    TeamComponent,
    EditComponent
  ]
})
export class TeamModule { }
