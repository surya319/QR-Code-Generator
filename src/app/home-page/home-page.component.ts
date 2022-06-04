import { Component, OnInit, ViewChild,  
  ElementRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'QrCode';
  qrJson: any;
  data: string;
  id:any;
  @ViewChild('product', {  
    static: true  
}) product: ElementRef ;
@ViewChild('timestamp', {  
  static: true  
}) timestamp: ElementRef 
@ViewChild('dimension', {  
  static: true  
}) dimension: ElementRef ;
results=[];
  ngOnInit() {  
   
   


  
  }  
  onclickQrcodeScanner()
  {
    this.qrJson = {                           
      "ProductName": this.product.nativeElement.value,                           
      "TimeStamp": this.timestamp.nativeElement.value,                           
      "Dimension": this.timestamp.nativeElement.value,
       "UniqueserialNumber":this.encryptData(Math.floor(100000 + Math.random() * 900000)),
    }      
    this.data = JSON.stringify(this.qrJson);  
  }
  encryptData(data:any) {


      return CryptoJS.AES.encrypt(JSON.stringify(data), "PBKDF2WithHmacSHA256").toString();
   
  }

}
