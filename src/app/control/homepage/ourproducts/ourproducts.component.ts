import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.component.html',
  styleUrls: ['./ourproducts.component.css'],
})
export class OurproductsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  ShowDetails() {
    this.router.navigateByUrl('/product_details');
  }
}
