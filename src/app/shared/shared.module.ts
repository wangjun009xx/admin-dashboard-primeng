import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputIconComponent} from './components/input-icon/input-icon.component';

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

    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SharedModule {

}
