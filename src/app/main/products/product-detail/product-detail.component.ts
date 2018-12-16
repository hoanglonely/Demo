import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/product.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product']
  }
}
