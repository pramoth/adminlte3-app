import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import {FormDemoRoutingModule} from './form-demo-routing.module';



@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    FormDemoRoutingModule
  ]
})
export class FormDemoModule { }
