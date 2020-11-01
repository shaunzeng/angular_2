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
var Courses_service_1 = require('./Courses.service');
var CoursesComponent = (function () {
    function CoursesComponent(_coursesService) {
        this._coursesService = _coursesService;
        this.viewMode = 'myCourses';
        this.myCourses = this._coursesService.getMyCourses();
        this.allCourses = this._coursesService.getAllCourses();
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses-component',
            moduleId: module.id,
            templateUrl: 'Courses.html',
            providers: [Courses_service_1.CoursesService]
        }), 
        __metadata('design:paramtypes', [Courses_service_1.CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=Courses.component.js.map