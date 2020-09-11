import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { ShMaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ShMaterialModule
  ],
  providers:[]
})
export class ProductsModule { }
