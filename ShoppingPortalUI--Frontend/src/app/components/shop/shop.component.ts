import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private service: ProductService) { }
  public products: any[] = [];
  ngOnInit(): void {
    this.service.getAllProduct().subscribe((data) => {
      this.products = data;
    })

  }
}
