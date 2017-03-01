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
var forms_1 = require("@angular/forms");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(fb) {
        this.fb = fb;
        this.resetPasswordForm = this.fb.group({
            username: ["", forms_1.Validators.required],
            temppassword: ["", forms_1.Validators.required],
            newpassword: ["", forms_1.Validators.required],
            confirmpassword: ["", forms_1.Validators.required]
        });
    }
    ResetPasswordComponent.prototype.doResetPassword = function (event) {
        console.log(event);
        console.log(this.resetPasswordForm.value);
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-reset-password',
        templateUrl: 'reset-password.component.html',
        styleUrls: ['reset-password.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-password.component.js.map