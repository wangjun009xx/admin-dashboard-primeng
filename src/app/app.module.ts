import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    Error404PageComponent,
    AdminPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'windowObject', useValue: window},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
