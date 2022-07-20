import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpricingRoutingModule } from './addpricing-routing.module';
import { AddpricingComponent } from './addpricing.component';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';



@NgModule({
  declarations: [
    AddpricingComponent
  ],
  imports: [
    CommonModule,
    AddpricingRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FeahterIconModule
  ]
})
export class AddpricingModule { }
