import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project }        from '../project/project';
import { ProjectService } from '../project/project.service';
import { MaterializeDirective} from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: [ 'list.component.css' ]
})

export class ListComponent implements OnInit {
    constructor() {
      
    }
}