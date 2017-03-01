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
var project_service_1 = require("../project.service");
var VolunteerProjectComponent = (function () {
    function VolunteerProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    VolunteerProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    VolunteerProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (res) {
            _this.projects = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    VolunteerProjectComponent.prototype.getProjectsByKeyword = function (keyword) {
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
    VolunteerProjectComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
        this.router.navigate(['/view-project', project.id]);
    };
    return VolunteerProjectComponent;
}());
VolunteerProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-projects',
        templateUrl: 'volunteer-project.component.html',
        styleUrls: ['volunteer-project.component.css']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, router_1.Router])
], VolunteerProjectComponent);
exports.VolunteerProjectComponent = VolunteerProjectComponent;
//# sourceMappingURL=volunteer-project.component.js.map