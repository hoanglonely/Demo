import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../../core/product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    
    p: number = 1;
    pageTitle = 'Product List';
    showImage = false;
    imageWidth = 50;
    imageMargin = 2;
    _listFilter = '';
    errorMessage = '';

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts : IProduct[] = [];

    products: IProduct[] = [];

    constructor( private _productService: ProductService){
        this.listFilter = '';
    } 
    performFilter(filterBy: string): any {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    onRatingClicked(a: string){
        this.pageTitle = 'Product List: ' + a;
    }
    ngOnInit(): void {
         this._productService.getProducts().subscribe(products => {
             this.products = products;
             this.filteredProducts = this.products;
         },
         error => this.errorMessage = <any>error);
    }
}