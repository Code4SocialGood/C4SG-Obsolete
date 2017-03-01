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
var common_1 = require("@angular/common");
var project_service_1 = require("../project.service");
var ViewProjectComponent = (function () {
    function ViewProjectComponent(projectService, route, router, location) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'] - 1;
            _this.projectService.getProject(id).subscribe(function (res) {
                _this.project = JSON.parse(JSON.parse(JSON.stringify(res))._body);
            }, function (error) { return console.log(error); });
        });
    };
    ViewProjectComponent.prototype.update = function () {
        var _this = this;
        this.projectService
            .update(this.project)
            .subscribe(function (response) {
            _this.router.navigate(['/nonprofits']);
        }, function (error) { return console.log(error); });
    };
    ViewProjectComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ViewProjectComponent;
}());
ViewProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'view-project',
        templateUrl: 'view-project.component.html',
        styleUrls: ['view-project.component.css']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location])
], ViewProjectComponent);
exports.ViewProjectComponent = ViewProjectComponent;
//# sourceMappingURL=view-project.component.js.map