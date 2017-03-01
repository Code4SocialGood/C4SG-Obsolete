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
var project_1 = require("../project");
var project_service_1 = require("../project.service");
var OrganizationProjectComponent = (function () {
    function OrganizationProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    OrganizationProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    OrganizationProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (res) {
            _this.projects = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    // TODO Don't provide the identity colume value
    OrganizationProjectComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        var project = new project_1.Project(8, name, "Organization", 'description', 'logo.png', 'city', 'USA', '55311', 'Teens Give');
        this.projectService
            .add(project)
            .subscribe(function (response) {
            _this.getProjects();
            _this.router.navigate(['/nonprofits']);
        }, function (error) { return console.log(error); });
    };
    OrganizationProjectComponent.prototype.delete = function (project) {
        var _this = this;
        this.projectService
            .delete(project.id)
            .subscribe(function (response) {
            _this.getProjects();
            _this.router.navigate(['/nonprofits']);
        }, function (error) { return console.log(error); });
    };
    OrganizationProjectComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
        this.router.navigate(['/view-project', project.id]);
    };
    return OrganizationProjectComponent;
}());
OrganizationProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-projects',
        templateUrl: 'organization-project.component.html',
        styleUrls: ['organization-project.component.css']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, router_1.Router])
], OrganizationProjectComponent);
exports.OrganizationProjectComponent = OrganizationProjectComponent;
//# sourceMappingURL=organization-project.component.js.map