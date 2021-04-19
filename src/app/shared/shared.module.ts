import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { LoginModalContent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent, LoginModalContent],
  entryComponents: [LoginModalContent],
  exports: [LoaderComponent, LoginModalContent],
})
export class SharedModule {}
