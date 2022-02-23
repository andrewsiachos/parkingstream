import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  subNav(e){
    let destination = e.target.attributes.id.nodeValue;

    if(destination == 'dailyRevenues'){
      this.router.navigate(['/daily']);
    }
  }

}
