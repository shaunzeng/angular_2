import {Injectable} from '@angular/core';
import {ICourse} from '../shared/interfaces';

@Injectable()

export class CoursesService {
    private myCourses : Array<ICourse>;
    private allCourses: Array<ICourse>;
    
    constructor(){
        this.myCourses = [
            {
                courseName:'Angular 2 In Depth', 
                courseId:'0001', 
                courseCompletion:50, 
                courseCompleted:false,
                courseUrl:'angular-2-in-depth', 
                courseDescription:'This is a angular 2 course that focuses on angular 2 best pracetices'
            },
            {
                courseName:'Node In Depth', 
                courseId:'0002', 
                courseCompletion:70, 
                courseCompleted:false,
                courseUrl:'node-in-depth',
                courseDescription:'This is a node js course'
            },
            {
                courseName:'Bootstrap Fundamentals', 
                courseId:'0003', 
                courseCompletion:40, 
                courseCompleted:false,
                courseUrl:'bootstrap-fundamentals',
                courseDescription:'This is a boostrap cours',
            },
            {
                courseName:'Virtual Reality', 
                courseId:'0004', 
                courseCompletion:20, 
                courseCompleted:false,
                courseUrl:'virtual-reality', 
                courseDescription:'This is a virtual reality course'
            },
            {
                courseName:'Game Design', 
                courseId:'0005', 
                courseCompletion:10, 
                courseCompleted:false,
                courseUrl:'game-design',
                courseDescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
            },
            {
                courseName:'Programming graphics', 
                courseId:'0006', 
                courseCompletion:100, 
                courseCompleted:true,
                courseUrl:'programming-graphics',
                courseDescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            }
        ];
        
        this.allCourses = [
            {
                courseName:'Angular 2 In Depth', 
                courseId:'0001', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'angular-2-in-depth', 
                courseDescription:'This is a angular 2 course that focuses on angular 2 best pracetices'
            },
            {
                courseName:'Node In Depth', 
                courseId:'0002', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'node-in-depth',
                courseDescription:'This is a node js course'
            },
            {
                courseName:'Bootstrap Fundamentals', 
                courseId:'0003', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'bootstrap-fundamentals',
                courseDescription:'This is a boostrap cours',
            },
            {
                courseName:'Virtual Reality', 
                courseId:'0004', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'virtual-reality', 
                courseDescription:'This is a virtual reality course'
            },
            {
                courseName:'Game Design', 
                courseId:'0005', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'game-design',
                courseDescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
            },
            {
                courseName:'Programming graphics', 
                courseId:'0006', 
                courseCompletion:0, 
                courseCompleted:false,
                courseUrl:'programming-graphics',
                courseDescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            }
        ]
    }
    
    public getMyCourses():Array<ICourse>{
        return this.myCourses;
    }
    
    public getAllCourses():Array<ICourse>{
        return this.allCourses;
    }
}