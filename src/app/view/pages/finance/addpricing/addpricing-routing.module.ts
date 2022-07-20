import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpricingComponent } from './addpricing.component';

const routes: Routes = [{ path: '', component: AddpricingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpricingRoutingModule { }
