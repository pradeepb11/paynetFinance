import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationmidComponent } from './activationmid.component';

const routes: Routes = [{ path: '', component: ActivationmidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationmidRoutingModule { }
