import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantprofileRoutingModule } from './merchantprofile-routing.module';
import { MerchantprofileComponent } from './merchantprofile.component';


@NgModule({
  declarations: [
    MerchantprofileComponent
  ],
  imports: [
    CommonModule,
    MerchantprofileRoutingModule
  ]
})
export class MerchantprofileModule { }
