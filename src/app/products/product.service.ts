import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './product.component'


import { catchError, map, tap } from 'rxjs/operators';

import { IProduct } from './product';


export class TestClass {
  apiTest: String = "jitesh";
}


// @Injectable()
@Injectable({
  providedIn: ProductComponent,
})
export class ProductService {
  private _productUrl = 'https://www.mocky.io/v2/5ca5ee5a3300008c532eaa6e';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productUrl);
  }
}
