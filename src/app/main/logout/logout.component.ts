import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  logoutAborted = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logoutAborted = false;
  }

  logout(){
    this.router.navigate(['']);
  }

  cancelLogout(){
    this.logoutAborted = true;
  }

}
