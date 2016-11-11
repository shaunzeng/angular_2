import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../Home/Home.component';
import {CoursesComponent} from'../Courses/Courses.component';
import {QuizzesComponent} from '../Quizzes/Quizzes.component';
import {QuizResultsComponent} from'../QuizResults/QuizResults.component';
import {EditAccountComponent} from '../EditAccount/EditAccount.component';
import {PageNotFoundComponent} from'../PageNotFound/PageNotFound.component';



const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home',},
    {path:'home', component:HomeComponent},
    {path:'courses', component:CoursesComponent},
    {path:'quizzes', component:QuizzesComponent},
    {path:'editAccount',component:EditAccountComponent},
    {path:'**', pathMatch:'full', component:PageNotFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

export const routableComponents = [
    HomeComponent,
    CoursesComponent,
    QuizzesComponent,
    EditAccountComponent,
    PageNotFoundComponent
]