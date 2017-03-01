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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.projectUrl = "http://localhost:8080/api/project";
    }
    ProjectService.prototype.getProjects = function () {
        var url = this.projectUrl + "/all";
        return this.http.get(url);
    };
    ProjectService.prototype.getProject = function (id) {
        var index = id + 1;
        var url = this.projectUrl + "/search/byId/" + index;
        return this.http.get(url);
    };
    // TODO replace with search by keyword   
    ProjectService.prototype.getProjectsByKeyword = function (keyWord) {
        var url = this.projectUrl + "/search/byKeyword/" + keyWord;
        return this.http
            .get(url);
    };
    ProjectService.prototype.add = function (project) {
        var url = this.projectUrl + "/add";
        return this.http
            .post(url, project, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.delete = function (id) {
        var url = this.projectUrl + "/delete/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .catch(this.handleError);
    };
    ProjectService.prototype.update = function (project) {
        var url = this.projectUrl + "/update";
        return this.http
            .put(url, project, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map