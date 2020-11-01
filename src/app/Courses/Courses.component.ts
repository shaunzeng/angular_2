import {Component} from '@angular/core';
import {CoursesService} from './Courses.service';
import {ICourse} from '../shared/interfaces';

@Component({
    selector:'courses-component',
    moduleId: module.id,
    templateUrl:'Courses.html',
    providers:[CoursesService]
})

export class CoursesComponent{
    public viewMode:string = 'myCourses';
    public myCourses:Array<ICourse>;
    public allCourses:Array<ICourse>
    
    constructor(private _coursesService: CoursesService){
        this.myCourses = this._coursesService.getMyCourses();
        this.allCourses = this._coursesService.getAllCourses();
    }
    
}