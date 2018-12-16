import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { IProduct } from '../main/products/product';
import { catchError, tap, map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl = 'api/products/products.json';

  constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this._productUrl).pipe(
        tap(data => console.log('All: ')),
        catchError(this.handleError)
      );
    }
    getProduct(id: number): Observable<IProduct> {
      if(id === 0 ){
        return of(this.initializeProduct());
      }
      const url = `${this._productUrl}/${id}`
      return this.getProducts().pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      , 
      catchError(this.handleError));
    }

  //   deleteProduct(id: number): Observable<Response> {
  //     let headers = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: headers });

  //     const url = `${this._productUrl}/${id}`;
  //     return this._http.delete(url, options)
  //         .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
  //         .catch(this.handleError);
  // }

    // deleteHero (id: number): Observable<{}> {
    //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    //   return this.http.delete(url, httpOptions)
    //     .pipe(
    //       catchError(this.handleError('deleteHero'))
    //     );
    // }
  //   getProduct(id: number): Observable<IProduct> {
  //     if (id === 0) {
  //         return Observable.of(this.initializeProduct());
  //     };
  //     const url = `${this.baseUrl}/${id}`;
  //     return this.http.get(url)
  //         .map(this.extractData)
  //         .do(data => console.log('getProduct: ' + JSON.stringify(data)))
  //         .catch(this.handleError);
  // }
  // getProduct(id: number): Observable<IProduct> {
  //   if (id === 0) {
  //     return of(this.initializeProduct());
  //   };
  //   const url = `${this._productUrl}/${id}`;
  //   return this.http.get(url).pipe(map(this.extractData),
  //     tap(data => console.log('OneProduct: ' + JSON.stringify(data))),
  //     catchError(this.handleError));
  // }
  // deleteProduct(id: number): Observable<Response> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   const url = `${this._productUrl}/${id}`;
  //   return this.http.delete(url, options).pipe(
  //     tap(data => console.log('deleteProduct: ' + JSON.stringify(data))),
  //     catchError(this.handleError));
  // }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }
  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      phoneNumber: null,
      tags: [],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
