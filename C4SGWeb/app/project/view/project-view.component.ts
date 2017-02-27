import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../common/project';
import { ProjectService } from '../common/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'view-project',
  templateUrl: 'project-view.component.html',
  styleUrls: ['project-view.component.css']
})

export class ProjectViewComponent implements OnInit {
  projectForm = FormGroup;
  project: Project;
  params: Params;
  locations: [
    'Remote',
    'Physical Address'
  ];

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              @Inject(FormBuilder) fb: FormBuilder) {
    // this.projectForm = fb.group({
    //   projectName: ['', Validators.required],
    //   organizationName: [''],
    //   shortDescription: ['', Validators.required],
    //   longDescription: ['', Validators.required],
    // });
  }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      let id = +params['id'] - 1;

      this.projectService.getProject(id).subscribe(
        res => {
          this.project = JSON.parse(JSON.parse(JSON.stringify(res))._body);
          console.log('this.project', this.project);
        },
        error => console.log('error', error)
      );
    });
  }

  update(): void {

    this.projectService
      .update(this.project)
      .subscribe(
        response => {
          this.router.navigate(['/nonprofits']);
        },
        error => console.log(error)
      );
  }

  goBack(): void {
    this.location.back();
  }
}
