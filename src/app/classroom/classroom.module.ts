import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomComponent } from './classroom.component';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { MaterialComponentModule } from '../shared/components/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ClassroomComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModule,
    ClassroomRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class ClassroomModule { }
