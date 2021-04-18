import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { WarningDirective } from './shared/directives/WarningDirective';
import { NavComponent } from './shared/nav.component';
import { LoginModalContent } from './shared/login.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, ...routableComponents, WarningDirective, NavComponent, LoginModalContent],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalContent],
})
export class AppModule {}
