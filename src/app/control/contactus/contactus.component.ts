import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  ContactForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ContactForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  SendData() {}
}
