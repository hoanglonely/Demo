import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IProduct } from "../main/products/product";
import { ProductService } from "./product.service";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<IProduct>{
    constructor(private productService: ProductService,
        private router: Router){}
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<IProduct>{
            let id = route.params['productId'];
            if(isNaN(+id)){
                console.log(`Product id was not a number: ${id}`);
                this.router.navigate(['/product']);
                return of(null);
            }
            return this.productService.getProduct(+id).pipe(map(product =>{
                if(product){
                    return product;
                }
                console.log(`Product was not found: ${id}`);
                this.router.navigate(['/products']);
                return null;
            }), catchError(error =>{
                console.log(`error: ${error}`);
                this.router.navigate(['/products']);
                return of(null);
            }))
        }
}