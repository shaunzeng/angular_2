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
var HomeService = (function () {
    function HomeService() {
        this.username = 'Shaun';
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
            }
        ];
        this.myQuizzes = [
            { title: 'Angular best practice', course: 'Angular 2 In Depth', grade: 8.9, level: 'Great', isTaken: true },
            { title: 'Node basics', course: 'Node In Depth', grade: 5.9, level: 'Good', isTaken: true },
            { title: 'HTML Basics Quiz 1', course: 'HTML Basics', grade: 2.9, level: 'Failed', isTaken: true },
            { title: 'C# Fundamentals', course: 'C# Fundamentals', isTaken: false },
        ];
        this.myScholarship = [
            { title: 'Student grant #1', amount: 200.00, status: 'Pending', approved: false, source: 'some fund' },
            { title: 'Student grant #2', amount: 1000.00, status: 'Approved', approved: true, source: 'some fund' }
        ];
    }
    HomeService.prototype.getMyCourses = function () {
        return this.myCourses;
    };
    HomeService.prototype.getMyQuizzes = function () {
        return this.myQuizzes;
    };
    HomeService.prototype.getMyScholarship = function () {
        return this.myScholarship;
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=Home.service.js.map