import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantsettingComponent } from './merchantsetting.component';

const routes: Routes = [{ path: '', component: MerchantsettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantsettingRoutingModule { }
