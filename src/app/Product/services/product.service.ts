import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.model';

@Injectable()
export class ProductService {
  list: IProduct[] = [
    {
      name: 'product 1',
      id: '1',
      rating: 2.6,
      descrpiton: 'good product',
      category: 'tier1',
    },
    {
      name: 'product 2',
      id: '2',
      rating: 1,
      descrpiton: 'good product',
      category: 'tier2',
    },
    {
      name: 'product 3',
      id: '3',
      rating: 2,
      descrpiton: 'good product',
      category: 'tier1',
    },
    {
      name: 'product 4',
      id: '4',
      rating: 3,
      descrpiton: 'good product',
      category: 'tier1',
    },
    {
      name: 'product 5',
      id: '5',
      rating: 4,
      descrpiton: 'good product',
      category: 'tier4',
    },
  ];

  getProdictList(): IProduct[] {
    return this.list;
  }
}
