import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantlistComponent } from './merchantlist.component';

const routes: Routes = [{ path: '', component: MerchantlistComponent  },
{ path: 'merchantprofile', loadChildren: () => import('../merchantprofile/merchantprofile.module').then(m => m.MerchantprofileModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantlistRoutingModule { }
