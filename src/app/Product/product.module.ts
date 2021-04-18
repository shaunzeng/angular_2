import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductComponent } from './container/product.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './Detail/detail.component';
import { CommonModule } from '@angular/common';

const routes: any = [
  {
    path: '',
    component: ProductComponent,
  },
  /*{ 
        path: 'detail/:id', 
        component: DetailComponent,
    },*/
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [ProductComponent, DetailComponent],
  providers: [ProductService],
})
export class ProductModule {}
