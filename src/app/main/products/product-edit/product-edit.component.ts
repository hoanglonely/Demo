import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/product.service';
import { MessageService } from '../../../shared/messages/message.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = 'Product edit';
  errorMessage: string;

  private currentProduct: IProduct;
  private originalProduct: IProduct;
  private dataIsValid: { [key: string]: boolean} ={};

  get isDrity(): boolean{
    return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);

  }

  get product(): IProduct{
    return this.currentProduct;
  }

  set product(value: IProduct){
    this.currentProduct = value;

    this.originalProduct = Object.assign({}, value);
  }

  constructor(
    private route: ActivatedRoute,
    private rouer: Router,
    private productService: ProductService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      
    })
  }

  // isValid(path: string): boolean{

  // }

  onProductRetrieved(product: IProduct){
    this.product = product;
    if(this.product.productId ===0){
      this.pageTitle = 'Add Product';
    }else{
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }
  }

  // saveProduct(): void{
  //   if(this.is)
  // }

  // validate(): void{
  //   this.dataIsValid*() = {};
  //   if(this.product.productName && this.product.productName.length >= 3 &&)
  // }

}
