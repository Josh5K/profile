import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  JOBS = [
    {
      name: "Northfield IT",
      title: "Infrastructure Specialist",
      date: "April 2018 - Present",
      description: `Northfield IT is an infrastructure management company providing Dev Ops and Networking services to one of the
                    largest sports entertainment companies in the United States. As part of the Operations Team I was responsible for Front-Line
                    monitoring of applications, databases and integration environments. When the fires were all out my focus switch to velocity by
                    developing automation solutions using Chef & Kubernetes to ensure a secure and consistent environment.
                   `
  },
  {
    name: "Creators Club",
    title: "Co-Owner",
    date: "January 2017 - Present",
    description: `Creators Club is an online content creators managment company aimed to provide clients with the tools to grow their brands.
                  I am responsible for development and maintance of our technical systems including our ecommernce site, game servers, and client portfolios. I have also pioneered support and triage
                  tools to allow us to respond quickly to consumer concerns.
                 `
}
]

  constructor() { }

  ngOnInit() {
  }

}
