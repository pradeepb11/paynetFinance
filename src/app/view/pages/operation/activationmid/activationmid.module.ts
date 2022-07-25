import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationmidRoutingModule } from './activationmid-routing.module';
import { ActivationmidComponent } from './activationmid.component';


@NgModule({
  declarations: [
    ActivationmidComponent
  ],
  imports: [
    CommonModule,
    ActivationmidRoutingModule
  ]
})
export class ActivationmidModule { }
