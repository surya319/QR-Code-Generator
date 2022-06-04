import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QrCode';
  qrJson: any;
  data: string;
  id:any;
results=[];
  ngOnInit() {  
   
    // const id = generateUniqueId({
    //   length: 32,
    //   useLetters: false
    // });


this.qrJson = {                           
  "ProductName": "gyropoc",                           
  "TimeStamp": "21.30.23.13213",                           
  "Dimension": "250*70",
   "UniqueserialNumber":this.encryptData(Math.floor(100000 + Math.random() * 900000)),
}      
this.data = JSON.stringify(this.qrJson);    
  }  
  encryptData(data:any) {


      return CryptoJS.AES.encrypt(JSON.stringify(data), "PBKDF2WithHmacSHA256").toString();
   
  }
               
}
