import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourcategories',
  templateUrl: './ourcategories.component.html',
  styleUrls: ['./ourcategories.component.css'],
})
export class OurcategoriesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  ShowAllProducts() {
    this.router.navigateByUrl('/products');
  }
}
