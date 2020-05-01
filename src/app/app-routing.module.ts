import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';


const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**', component: Error404PageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
