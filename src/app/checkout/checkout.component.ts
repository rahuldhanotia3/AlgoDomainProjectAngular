import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  creditdebit:String;
  paytmwallet:String;
  upi:String;

  constructor() { }
  currentCart:any=[];
  grandTotal:number = 0;
  date = new Date().toDateString();
  time = new Date().toLocaleTimeString();

  ngOnInit(): void {
  

    this.currentCart=JSON.parse(localStorage.getItem("cart"));
    for(var i = 0; i< this.currentCart.length ;i++)
    {
      this.grandTotal= this.grandTotal + this.currentCart[i].total;
      console.log(this.currentCart);
    }
  }

  submit()
  {
    if(this.creditdebit != null || this.paytmwallet != null || this.upi != null)
    {
      alert("Ordered Successfully ");
    }
    else
    {
      alert("Please Select Payment Option!")
    }
  }
}
