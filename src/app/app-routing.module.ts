import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesSingleComponent } from './Courses/Courses.component';
import { EditAccountComponent } from './EditAccount/EditAccount.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { TestComponent } from './Test/test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'product', loadChildren: () => import('./Product/product.module').then((m) => m.ProductModule) },
  { path: 'home', loadChildren: () => import('./Home/home.module').then((m) => m.HomeModule) },
  { path: 'courses', component: CoursesSingleComponent },
  { path: 'quiz', loadChildren: () => import('./Quiz/quiz.module').then((m) => m.QuizModule) },
  { path: 'editAccount', component: EditAccountComponent },
  { path: 'test', component: TestComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routableComponents = [CoursesSingleComponent, EditAccountComponent, PageNotFoundComponent, TestComponent];
