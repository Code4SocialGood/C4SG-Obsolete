"use strict";
var Project = (function () {
    function Project(id, name, organizationName, shortDescription, description, image, line1, line2, city, country, zip) {
        this.id = id;
        this.name = name;
        this.organizationName = organizationName;
        this.shortDescription = shortDescription;
        this.description = description;
        this.image = image;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.country = country;
        this.zip = zip;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map