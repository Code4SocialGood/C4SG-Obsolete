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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var project_1 = require("../project");
var project_service_1 = require("../project.service");
var CreateProjectComponent = (function () {
    function CreateProjectComponent(projectService, route, router, location, fb, changeDetectorRef) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.changeDetectorRef = changeDetectorRef;
        this.file_srcs = [];
        this.debug_size_before = [];
        this.debug_size_after = [];
        // create form and validation
        this.createProjectForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            orgName: ["", forms_1.Validators.required],
            shortDescription: ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(200)
                ]],
            description: ["", forms_1.Validators.required],
            remote: [false],
            address: [false],
            line1: "",
            line2: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        });
    }
    //Upload image
    CreateProjectComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    CreateProjectComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    CreateProjectComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, function (result) {
                var img = document.createElement("img");
                img.src = result;
                _this.resize(img, 250, 250, function (resized_jpeg, before, after) {
                    _this.debug_size_before.push(before);
                    _this.debug_size_after.push(after);
                    _this.file_srcs.push(resized_jpeg);
                    _this.readFiles(files, index + 1);
                });
            });
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    };
    CreateProjectComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        return img.onload = function () {
            var width = img.width;
            var height = img.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    // retrieve info from form 
    CreateProjectComponent.prototype.createProject = function () {
        var _this = this;
        var form = this.createProjectForm.value;
        var project = new project_1.Project(form.name, form.organization, form.shortDescription, form.description, form.line1, form.line2, form.city, form.country, form.zip);
        this.projectService
            .add(project)
            .subscribe(function (response) {
            _this.router.navigate(['/projects']);
        }, function (error) { return console.log(error); });
    };
    CreateProjectComponent.prototype.cancel = function () {
        this.router.navigate(['/projects']);
    };
    return CreateProjectComponent;
}());
CreateProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-project',
        templateUrl: 'create.component.html',
        styleUrls: ['create.component.css']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location,
        forms_1.FormBuilder,
        core_1.ChangeDetectorRef])
], CreateProjectComponent);
exports.CreateProjectComponent = CreateProjectComponent;
//# sourceMappingURL=create.component.js.map