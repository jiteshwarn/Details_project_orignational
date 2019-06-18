import { Component } from "@angular/core";
import { ProductService, TestClass } from "./product.service";
import { IProduct } from "./product";

@Component({
    selector: 'pm-component',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    pageTitle = "My Page";
    errorMessage: String;
    allProducts: IProduct[];

    products = [
        {
            "sequence": 1,
            "name": "A",
            "productName": "Benz",
            "price": 10000000
        },
        {
            "sequence": 2,
            "name": "B",
            "productName": "Ford",
            "price": 10000000
        },
        {
            "sequence": 3,
            "name": "C",
            "productName": "Mercedz",
            "price": 10000000
        },
        {
            "sequence": 4,
            "name": "D",
            "productName": "Maruti",
            "price": 10000000
        }
    ];
    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {

        this._productService.getProducts().subscribe(prod => this.allProducts = prod, err => this.errorMessage = <any>err)
    }

}

let x = new TestClass();
console.log(x.apiTest);

