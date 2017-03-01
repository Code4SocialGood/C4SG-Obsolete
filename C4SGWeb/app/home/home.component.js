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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_service_1 = require("../project/project.service");
var HomeComponent = (function () {
    function HomeComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.projects = [];
        this.state = 'inactive';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getProjectsByKeyword = function (keyword) {
        var _this = this;
        keyword = keyword.trim();
        if (!keyword) {
            return;
        }
        this.projectService.getProjectsByKeyword(keyword).subscribe(function (res) {
            _this.projects = JSON.parse(JSON.parse(JSON.stringify(res))._body);
            _this.router.navigate(['/volunteers']);
        }, function (error) { return console.log(error); });
    };
    //a defined function to control the animation of the button
    HomeComponent.prototype.toggleState = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
        animations: [
            core_1.trigger('buttonState', [
                core_1.state('inactive', core_1.style({
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    transform: 'scale(1.05)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map