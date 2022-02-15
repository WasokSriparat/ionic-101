import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.serviceUrl}/product`;
  constructor(private http: HttpClient) { }

  //Get All Product
  getProduct() : any{
    return this.http.get<any>(this.url);
  }

  getProductById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }
}
