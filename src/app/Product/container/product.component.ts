import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
    `
      .star {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
      }
    `,
  ],
})
export class ProductComponent implements OnInit {
  products: IProduct[];
  constructor(public productService: ProductService, private router: Router) {
    console.log('comp init');
  }

  ngOnInit() {
    this.products = this.productService.getProdictList();
  }

  onClick(id: string) {
    this.router.navigateByUrl('/details/' + id, {});
  }

  count(n: number) {
    let decimal = n % 1;
    console.log('checking ? ', n, decimal);
    let result = new Array(Math.ceil(n)).fill(100);
    result[result.length - 1] = parseInt((decimal * 100).toString());
    return result;
  }
}
