import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home-container.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './home-routing.module';
import { SummaryComponent } from './components/summary.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CoursesComponent } from './components/courses.component';
import { QuizzesComponent } from './components/quizzes.component';
import { BillingComponent } from './components/billing.component';
import { InboxComponent } from './components/inbox.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes), NgApexchartsModule, SharedModule],
  declarations: [HomeComponent, SummaryComponent, CoursesComponent, QuizzesComponent, BillingComponent, InboxComponent],
  providers: [HomeService],
})
export class HomeModule {}
