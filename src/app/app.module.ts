import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { WarningDirective } from './shared/directives/WarningDirective';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './shared/nav.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, SharedModule],
  declarations: [AppComponent, ...routableComponents, WarningDirective, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('app module instantiated');
  }
}
