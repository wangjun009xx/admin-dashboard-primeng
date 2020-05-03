import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminPageComponent} from './admin-page.component';
import {SharedModule} from '../../shared/shared.module';
import {AdminPageService} from './admin-page.service';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AdminPageComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AdminPageService
  ]
})

export class AdminPageModule {

}
