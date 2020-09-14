import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { ShMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartItemsCountComponent } from './cart/cart-items-count/cart-items-count.component';
import { AddToCartComponent } from './cart/add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [CartItemsCountComponent,AddToCartComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ShMaterialModule,
    FlexLayoutModule,
   
  ],
  exports:[
    ShMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,FlexLayoutModule,
    CartItemsCountComponent,
    AddToCartComponent
  ]
})
export class SharedModule { }
