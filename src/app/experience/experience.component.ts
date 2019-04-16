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
      title: "Jr System Administrator",
      date: "April 2018 - Present",
      description: `Northfield IT is an infrastructure management company providing Dev Ops and Networking services to one of the
                    largest sports entertainment companies in the United States. As part of the Operations Team I was responsible for Front-Line
                    monitoring of applications, databases and integration environments. When the fires were all out my focus switch to velocity.
                    Developing automation solutions with Chef & Docker to ensure a secure and consistent environment.
                   `
  },
  {
    name: "Creators Club",
    title: "Software Developer",
    date: "January 2017 - Present",
    description: `Creators Club is an online content creators managment company aimed to provide clients with sponserships and
                  a platform to sell their merchendise. After coming on to assist in 2017 I have seen the company grow from just a single client.
                  I am responsible for development and maintance of our technical systems including our ecommernce site, game servers, and client portfolios.
                 `
}
]

  Northfield_Description:String = `Northfield IT is an infrastructure management company providing Dev Ops and Networking services to one of the
                                   largest sports entertainment companies in the United States. As part of the Operations Team I was responsible for Front-Line
                                   monitoring of applications, databases and integration environments. When the fires were all out my focus switch to velocity.
                                   Developing automation solutions with Chef & Docker to ensure a secure and consistent environment.
                                   `;

  CreatorsClub_Description:String = `Creators Club is an online content creators managment company aimed to provide clients with sponserships and
                                     a platform to sell their merchendise. After coming on to assist in 2017 I have seen the company grow from just a single client.
                                     I am responsible for development and maintance of our technical systems including our ecommernce site, game servers, and client portfolios.
                                   `;

  constructor() { }

  ngOnInit() {
  }

}
