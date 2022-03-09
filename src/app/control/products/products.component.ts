import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  ShowDetails() {
    this.router.navigateByUrl('/product_details');
  }
}
