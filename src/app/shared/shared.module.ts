import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputIconComponent} from './components/input-icon/input-icon.component';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    // Components
    InputIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // Component
    InputIconComponent,

    // PrimeNg
    CardModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,

    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SharedModule {

}
