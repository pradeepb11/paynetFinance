import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './view/layout/layout.module';
import { AuthGuard } from './helper/guard/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { authInterceptorProviders } from './helper/interceptor/auth.interceptor';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
