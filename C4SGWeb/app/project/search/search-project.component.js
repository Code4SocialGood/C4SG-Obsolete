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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var search_project_service_1 = require("./search-project.service");
var SearchProjectComponent = (function () {
    function SearchProjectComponent(projectSearchService, router) {
        this.projectSearchService = projectSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    SearchProjectComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.projectSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    SearchProjectComponent.prototype.gotoDetail = function (project) {
        var link = ['/detail', project.id];
        this.router.navigate(link);
    };
    return SearchProjectComponent;
}());
SearchProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project-search',
        templateUrl: 'search-project.component.html',
        styleUrls: ['search-project.component.css'],
        providers: [search_project_service_1.SearchProjectService]
    }),
    __metadata("design:paramtypes", [search_project_service_1.SearchProjectService,
        router_1.Router])
], SearchProjectComponent);
exports.SearchProjectComponent = SearchProjectComponent;
//# sourceMappingURL=search-project.component.js.map