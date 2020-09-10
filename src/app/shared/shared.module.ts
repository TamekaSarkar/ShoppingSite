import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { ShMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ShMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    ShMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,FlexLayoutModule
  ]
})
export class SharedModule { }
