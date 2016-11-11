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
var Home_service_1 = require('./Home.service');
var HomeComponent = (function () {
    function HomeComponent(_homeService) {
        this._homeService = _homeService;
        this.username = this._homeService.username;
        this.myCourses = this._homeService.getMyCourses();
        this.myQuizzes = this._homeService.getMyQuizzes();
        this.myScholarship = this._homeService.getMyScholarship();
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            moduleId: module.id,
            templateUrl: 'Home.html',
            providers: [Home_service_1.HomeService],
        }), 
        __metadata('design:paramtypes', [Home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=Home.component.js.map