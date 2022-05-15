import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartClass } from '../cart-class';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  cartArray:CartClass = new CartClass();
  cartProducts=[];
  currentCart:any=[];
  totalItem:number;
  constructor(private service:MyServiceService,private router:Router) { }

  ngOnInit(): void {
  this.currentCart = JSON.stringify(localStorage.getItem("cart"));
  this.totalItem = JSON.parse(localStorage.getItem("cart")).length;
  }

  clickOnCart()
  {
    this.router.navigate(['/cart']);
  }

  onShirt(str:any)
  {
    this.cartArray = new CartClass();
    for(var i = 0; i < this.service.arrayOfProducts.length ;i++)
    {
      if(this.service.arrayOfProducts[i].id == str)
      {
        //console.log(this.service.arrayOfProducts[i].id+"\t"+this.service.arrayOfProducts[i].productname+"\t"+this.service.arrayOfProducts[i].productprice);
        this.cartArray.id = this.service.arrayOfProducts[i].id;
        this.cartArray.productname = this.service.arrayOfProducts[i].productname;
        this.cartArray.productprice = this.service.arrayOfProducts[i].productprice;
        this.cartArray.quantity = this.service.arrayOfProducts[i].quantity;
        this.cartArray.total = this.service.arrayOfProducts[i].productprice * this.service.arrayOfProducts[i].quantity;;
      }
    }
    
    if(this.checkItemAlready(str) == "1")
    {
      this.cartProducts.push(this.cartArray);  
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
    this.ngOnInit();
  }

  checkItemAlready(str:String)
  {
    for(var j = 0; j < this.cartProducts.length ;j++)
    {
      if(this.cartProducts[j].id == str)
      {
        console.log(0);
        return "0";
      }
    }
    console.log(1);
    return "1";
  }
}
