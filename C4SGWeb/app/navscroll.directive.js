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
var NavScrollDirective = (function () {
    function NavScrollDirective(el) {
        this.el = el;
    }
    NavScrollDirective.prototype.onScroll = function ($event) {
        var cover = document.getElementById('top-cover');
        if (window.scrollY > 1) {
            this.highlight('rgba(20, 20, 20, 0.96)');
        }
        else {
            this.highlight(null);
        }
    };
    ;
    NavScrollDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return NavScrollDirective;
}());
__decorate([
    core_1.HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], NavScrollDirective.prototype, "onScroll", null);
NavScrollDirective = __decorate([
    core_1.Directive({
        selector: '[navScroll]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NavScrollDirective);
exports.NavScrollDirective = NavScrollDirective;
//# sourceMappingURL=navscroll.directive.js.map