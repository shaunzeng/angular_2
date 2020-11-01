import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, routableComponents],
  bootstrap: [AppComponent],
})
export class AppModule {}
