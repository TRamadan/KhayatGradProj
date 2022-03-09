import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      username: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],
      firstname: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      middlename: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      lastname: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      mobile: [
        null,
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],

      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],

      gender: [null, Validators.required],

      password: [null, Validators.required],
      Home_address: [null, Validators.required],
    });
  }

  DoneRegister() {
    if (this.RegisterForm.invalid) {
      //error go here
    } else {
      let body = {};
      //api call go here
    }
  }
}
