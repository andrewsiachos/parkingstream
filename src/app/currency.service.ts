import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  currencyValue = '€';

  getCurrencyValue(){
    return this.currencyValue;
  }

  setCurrency(newCurrency){

    if(newCurrency != this.currencyValue){
      this.currencyValue = newCurrency;
    }
    
  }
}
