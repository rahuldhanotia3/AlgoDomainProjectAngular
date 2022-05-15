import { Injectable } from '@angular/core';
import { CartClass } from './cart-class';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public arrayOfProducts=[
    {id:"1",productname:"shirt1",productprice:100,quantity:1,total:0},
    {id:"2",productname:"shirt2",productprice:200,quantity:1,total:0},
    {id:"3",productname:"shirt3",productprice:300,quantity:1,total:0},
    {id:"4",productname:"shirt4",productprice:400,quantity:1,total:0},
    {id:"5",productname:"shirt5",productprice:500,quantity:1,total:0},
    {id:"6",productname:"shirt6",productprice:600,quantity:1,total:0},
    {id:"7",productname:"shirt7",productprice:700,quantity:1,total:0},
    {id:"8",productname:"shirt8",productprice:800,quantity:1,total:0},
    {id:"9",productname:"shirt9",productprice:900,quantity:1,total:0},
    {id:"10",productname:"shirt10",productprice:1000,quantity:1,total:0}
  ];

  public arrayOfUsers = [
    {name:"Rahul",email:"rahul@gmail.com",password:"123"},
    {name:"Ravi",email:"ravi@gmail.com",password:"123"}
  ];

  constructor() { }
}
