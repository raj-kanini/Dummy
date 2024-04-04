import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  daturl: string = `https://localhost:7041/api/Product`;
  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.daturl);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.daturl, product);
  }
  getProduct(id: number): Observable<any> {
    let url: string = `${this.daturl}/${id}`;
    return this.http.get<any>(url)
  }
}
