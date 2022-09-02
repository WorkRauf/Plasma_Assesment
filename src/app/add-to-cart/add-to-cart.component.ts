import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  // title:any;
  // price:any;
  // description:any;
  // rating:any;
  // imgUrl:any;
  constructor(private router: Router,private dataService: DataService) { }

  ngOnInit(): void {
  }
  itemList : any = [
    {title: "Blue Shoes",price: 5, description: "The comfort for your feet, for everyday use.",rating: "500 persons like this", imgUrl:"../../assets/images/blue-shoes-.png"},
    {title: "Navy Shoes",price: 6, description: "The comfort for your feet, for everyday use.",rating: "800 persons like this", imgUrl:"../../assets/images/blue-shoe2.png"},
    {title: "Red Shoes",price: 9, description: "The comfort for your feet, for everyday use.",rating: "800 persons like this", imgUrl:"../../assets/images/shoe.png"},
    {title: "Navy Shoes",price: 6 , description: "The comfort for your feet, for everyday use.",rating: "800 persons like this", imgUrl:"../../assets/images/blue-shoe2.png"},
    {title: "Red Shoes",price: 9, description: "The comfort for your feet, for everyday use.",rating: "800 persons like this", imgUrl:"../../assets/images/shoe.png"},
    {title: "White Shoes",price: 14, description: "The comfort for your feet, for everyday use.",rating: "800 persons like this", imgUrl:"../../assets/images/white.png"},
  ];
  cartProductList = [];
  navigateTo(){
    this.router.navigate(['/checkout'])
  }

  addToCart(itemData:any){
   
    if(this.dataService.cardData.length>0){
      for (let i = 0; i < this.dataService.cardData.length; i++) {
        if(itemData['title']===this.dataService.cardData[i].title){
          this.dataService.cardData[i].quantity+=1;
          return
        }
      }
      itemData['quantity']=1;
      this.dataService.cardData.push(itemData);
    }else{
      itemData['quantity']=1;
      this.dataService.cardData.push(itemData);
    }
  }
}
