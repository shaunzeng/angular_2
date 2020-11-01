"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CoursesService = (function () {
    function CoursesService() {
        this.myCourses = [
            {
                courseName: 'Angular 2 In Depth',
                courseId: '0001',
                courseCompletion: 50,
                courseCompleted: false,
                courseUrl: 'angular-2-in-depth',
                courseDescription: 'This is a angular 2 course that focuses on angular 2 best pracetices'
            },
            {
                courseName: 'Node In Depth',
                courseId: '0002',
                courseCompletion: 70,
                courseCompleted: false,
                courseUrl: 'node-in-depth',
                courseDescription: 'This is a node js course'
            },
            {
                courseName: 'Bootstrap Fundamentals',
                courseId: '0003',
                courseCompletion: 40,
                courseCompleted: false,
                courseUrl: 'bootstrap-fundamentals',
                courseDescription: 'This is a boostrap cours',
            },
            {
                courseName: 'Virtual Reality',
                courseId: '0004',
                courseCompletion: 20,
                courseCompleted: false,
                courseUrl: 'virtual-reality',
                courseDescription: 'This is a virtual reality course'
            },
            {
                courseName: 'Game Design',
                courseId: '0005',
                courseCompletion: 10,
                courseCompleted: false,
                courseUrl: 'game-design',
                courseDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
            },
            {
                courseName: 'Programming graphics',
                courseId: '0006',
                courseCompletion: 100,
                courseCompleted: true,
                courseUrl: 'programming-graphics',
                courseDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            }
        ];
        this.allCourses = [
            {
                courseName: 'Angular 2 In Depth',
                courseId: '0001',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'angular-2-in-depth',
                courseDescription: 'This is a angular 2 course that focuses on angular 2 best pracetices'
            },
            {
                courseName: 'Node In Depth',
                courseId: '0002',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'node-in-depth',
                courseDescription: 'This is a node js course'
            },
            {
                courseName: 'Bootstrap Fundamentals',
                courseId: '0003',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'bootstrap-fundamentals',
                courseDescription: 'This is a boostrap cours',
            },
            {
                courseName: 'Virtual Reality',
                courseId: '0004',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'virtual-reality',
                courseDescription: 'This is a virtual reality course'
            },
            {
                courseName: 'Game Design',
                courseId: '0005',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'game-design',
                courseDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '
            },
            {
                courseName: 'Programming graphics',
                courseId: '0006',
                courseCompletion: 0,
                courseCompleted: false,
                courseUrl: 'programming-graphics',
                courseDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
            }
        ];
    }
    CoursesService.prototype.getMyCourses = function () {
        return this.myCourses;
    };
    CoursesService.prototype.getAllCourses = function () {
        return this.allCourses;
    };
    CoursesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=Courses.service.js.map