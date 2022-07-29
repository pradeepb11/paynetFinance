import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentsRoutingModule } from './adjustments-routing.module';
import { AdjustmentsComponent } from './adjustments.component';


@NgModule({
  declarations: [
    AdjustmentsComponent,
  ],
  imports: [
    CommonModule,
    AdjustmentsRoutingModule
  ]
})
export class AdjustmentsModule { }
