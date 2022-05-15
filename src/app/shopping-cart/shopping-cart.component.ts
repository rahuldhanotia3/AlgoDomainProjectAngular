import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  currentCart:any=[];
  arr:any = [];
  totalItem:number;
  constructor(private service:MyServiceService,private router:Router) { }

  ngOnInit(): void {
    this.currentCart=JSON.parse(localStorage.getItem("cart"));
    this.totalItem = this.currentCart.length;
    //console.log(this.currentCart);
  }

  plusClick(str)
  {
    this.arr =JSON.parse(localStorage.getItem("cart"));
    for(let i = 0;i < this.arr.length;i++)
    {
      if(this.arr[i].id == str)
      {
        this.arr[i].quantity = this.arr[i].quantity + 1;
        this.arr[i].total = this.arr[i].quantity * this.arr[i].productprice;
        localStorage.setItem("cart",JSON.stringify(this.arr));

      }
    }
    console.log(this.arr[0]);
    this.ngOnInit();
  }

  minusClick(str)
  {
    this.arr =JSON.parse(localStorage.getItem("cart"));
    for(let i = 0;i < this.arr.length;i++)
    {
      if(this.arr[i].id == str && this.arr[i].quantity >1)
      {
        this.arr[i].quantity = this.arr[i].quantity - 1;
        this.arr[i].total = this.arr[i].quantity * this.arr[i].productprice;
        localStorage.setItem("cart",JSON.stringify(this.arr)); 
      }
    }
    console.log(this.arr[0]);
    this.ngOnInit();
  }
  
  proceed()
  {
    this.router.navigate(['/checkout']);
  }

  clickOnCart()
  {
    this.router.navigate(['/cart']);
  }
}
