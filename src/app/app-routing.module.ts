import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/guard/auth.guard';
import { BaseComponent } from './view/layout/base/base.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./view/pages/auth/auth.module').then(m => m.AuthModule) }, 
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children:[
      { path: 'dashboard', loadChildren: () => import('./view/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'addpricing', loadChildren: () => import('./view/pages/finance/addpricing/addpricing.module').then(m => m.AddpricingModule) },
      { path: 'report', loadChildren: () => import('./view/pages/finance/report/report.module').then(m => m.ReportModule) },
      { path: 'merchantvc', loadChildren: () => import('./view/pages/finance/merchantvc/merchantvc.module').then(m => m.MerchantvcModule) },
      { path: 'banklist', loadChildren: () => import('./view/pages/finance/banklist/banklist.module').then(m => m.BanklistModule) },
      { path: 'addprocessor', loadChildren: () => import('./view/pages/it/addprocessor/addprocessor.module').then(m => m.AddprocessorModule) },
      { path: 'paymentprocessor', loadChildren: () => import('./view/pages/it/addpaymentprocessor/addpaymentprocessor.module').then(m => m.AddpaymentprocessorModule) },
      // { path: 'merchantsetting', loadChildren: () => import('./view/pages/operation/merchantsetting/merchantsetting.module').then(m => m.MerchantsettingModule) },
      // { path: 'activationmid', loadChildren: () => import('./view/pages/operation/activationmid/activationmid.module').then(m => m.ActivationmidModule) },
     
      { path: 'merchantlist', loadChildren: () => import('./view/pages/operation/merchantlist/merchantlist.module').then(m => m.MerchantlistModule) },
      { path: 'merchantreports', loadChildren: () => import('./view/pages/operation/merchantreports/merchantreports.module').then(m => m.MerchantreportsModule) },
      { path: 'merchantrefund', loadChildren: () => import('./view/pages/operation/merchantrefund/merchantrefund.module').then(m => m.MerchantrefundModule) },
      { path: 'settlement', loadChildren: () => import('./view/pages/operation/settlements/settlements.module').then(m => m.SettlementsModule) },
      { path: 'adjustment', loadChildren: () => import('./view/pages/operation/adjustments/adjustments.module').then(m => m.AdjustmentsModule) },

    ]
  },
  
  
  
  
  
  
  
 
  

]

  

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', 
  enableTracing: false, // <-- debugging purposes only
  useHash: true
})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// useHash: true