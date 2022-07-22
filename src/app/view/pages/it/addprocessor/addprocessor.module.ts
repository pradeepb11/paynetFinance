import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprocessorRoutingModule } from './addprocessor-routing.module';
import { AddprocessorComponent } from './addprocessor.component';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';


@NgModule({
  declarations: [
    AddprocessorComponent
  ],
  imports: [
    CommonModule,
    AddprocessorRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FeahterIconModule
  ]
})
export class AddprocessorModule { }
