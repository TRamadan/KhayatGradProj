import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  inputnumber: number = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

  plus() {
    this.inputnumber = this.inputnumber + 1;
  }

  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }

  AddToCart() {
    this.router.navigateByUrl('/cart');
  }
}
