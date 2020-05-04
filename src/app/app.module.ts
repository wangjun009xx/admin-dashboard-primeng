import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {AdminPageModule} from './pages/admin-page/admin-page.module';
import {SharedModule} from './shared/shared.module';
import {LoginPageModule} from './pages/login-page/login-page.module';

@NgModule({
  declarations: [
    Error404PageComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    // Page
    AdminPageModule,
    LoginPageModule,
  ],
  providers: [
    {provide: 'windowObject', useValue: window},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
