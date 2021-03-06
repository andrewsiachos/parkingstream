import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm:NgForm;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['main']);
  }

}
