import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource,MatSort, MatPaginator } from '@angular/material';
import { ProductDataService } from '@core/products/product-data.service';
import { Observable } from 'rxjs';
import { Product } from '@core/products/product';
import { CartService } from '../../core/cart/cart.service';


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
 
  @ViewChild(MatSort, {static:true}) sort : MatSort
  @ViewChild(MatPaginator, { static:true}) paginator: MatPaginator;


  constructor(private productdataservice:ProductDataService, private cartService: CartService) { }

  ngOnInit() {

    this.subscriptions.push(
      this.productdataservice
        .getAllProducts()
        .subscribe((products) => this.onDataLoad(products))
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  addItemToCart(product){
    this.cartService.addToCart(product,2);
  }
  onDataLoad(products: Product[]) {
    this.loading = false;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = products;
  }
  

}
