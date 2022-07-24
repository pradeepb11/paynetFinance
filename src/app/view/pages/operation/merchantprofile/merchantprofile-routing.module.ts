import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantprofileComponent } from './merchantprofile.component';

const routes: Routes = [{ path: '', component: MerchantprofileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantprofileRoutingModule { }
