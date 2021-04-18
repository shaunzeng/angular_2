import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { WarningDirective } from './shared/directives/WarningDirective';
import { NavComponent } from './shared/nav.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, ...routableComponents, WarningDirective, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
