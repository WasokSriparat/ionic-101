import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  products:any;
  constructor(private service : ProductService,private router: Router) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe((res)=>{
      this.products = res.data;
    });
  }

}
