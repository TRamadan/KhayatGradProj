import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],
      password: [null, Validators.required],
    });
  }

  //here is the function needed to make login for a registered user
  DoneLogin() {
    if (this.LoginForm.invalid) {
      //error message go here
    } else {
      let body = {
        email: this.LoginForm.controls.email.value,
        password: this.LoginForm.controls.password.value,
      };
      this.router.navigate(['/']);
    }

    //api call go here
  }
}
