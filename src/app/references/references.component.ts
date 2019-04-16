import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  REFS = [
    {
      name: "Marcos Reimer",
      image: "../../assets/images/mreimer.jpg",
      company: "Cambrien Credit Union",
      title: "Software Developer",
      quote: `The speed at which he picks up new technologies is inspiring.
              You can always tell when you're working with someone who has talent.`
    },
    {
      name: "Spencer McDonald",
      image: "../../assets/images/sMcDonald.jpg",
      company: "Metric IT",
      title: "Software Developer",
      quote: `Josh is an extremely talented and ambitious developer with a willingness
              to learn new things and tackle complex problems. I've enjoyed working with Josh
              in the past and would not hesitate to recommend him to any of my clients and employers.`
    },
    {
      name: "Ryan Roberts",
      image: "../../assets/images/rroberts.jpg",
      company: "24-7 Intouch",
      title: "Software Developer",
      quote: `Josh takes a great deal of pride in what he does and he works very hard to achieve
              the exact results the client is looking for. Josh is dedicated, intelligent,
              responsible, and a great candidate for a software developer position.`
    },
    {
      name: "Nicole Barry",
      image: "../../assets/images/nbarry.jpg",
      company: "Red River College",
      title: "Instructor",
      quote: `Josh is hard-worker, team-player, and provided thoughtful and thorough work on time.`
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
