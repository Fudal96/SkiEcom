import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  products: Product[] = [];


  constructor(private http: HttpClient) { }


ngOnInit(): void {
  this.http.get('https://localhost:5001/api/products').subscribe({
    next: (response: any) => this.products = response,
    error: error => console.log(error),
    complete: () => {
      console.log('request completed');
      console.log('extra statement');
      console.log(this.products)
    }
  })
}

}
