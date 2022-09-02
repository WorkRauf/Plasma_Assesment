import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: any = 0;
  isEmail=false;
  constructor(private dataService: DataService) { }
  cardItem: any = [];

  ngOnInit(): void {
    this.cardItem = this.dataService.cardData;
    console.log('', this.cardItem)
    for (let i = 0; i < this.cardItem.length; i++) {
      this.total += this.cardItem[i].price * this.cardItem[i].quantity;
    }

  }

  checkout() {
    this.isEmail=true;
  }

  submitFinal(email:any){
    if(this.isEmail){
    alert("Email sended successfully by nodemailer: "+ email);
    }
  }
}
