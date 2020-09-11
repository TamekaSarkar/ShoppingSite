import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTabHeader, MatTableDataSource } from '@angular/material';
import { ProductDataService } from '@core/products/product-data.service';
import { Observable } from 'rxjs';
import { Product } from '@core/products/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {
  dataSource= new MatTableDataSource<Product>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'name', 'price', 'addToCart'];
 
  constructor(private productdataservice:ProductDataService) { }

  ngOnInit() {

    this.subscriptions.push(
      this.productdataservice
        .getAllProducts()
        .subscribe((products) => this.onDataLoad(products))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  onDataLoad(products: Product[]) {
    this.loading = false;
    
    this.dataSource.data = products;
  }
  

}
