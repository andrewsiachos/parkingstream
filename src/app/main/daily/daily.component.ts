import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { withLatestFrom } from 'rxjs';
import { CurrencyService } from 'src/app/currency.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  
  revenueCurrency;

  date = new Date();
  
  threeDaysBefore;
  twoDaysBefore;
  yesterday;
  today;
  tomorrow;
  twoDaysNext;
  threeDaysNext;

  timeArray;
  
  hoursOfTheDay = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  
  tableObject = [];
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {

    this.revenueCurrency = this.currencyService.getCurrencyValue();
    
    this.threeDaysBefore = (new Date(new Date().getTime() - 72*60*60*1000)).toLocaleDateString();
    this.twoDaysBefore = (new Date(new Date().getTime() - 48*60*60*1000)).toLocaleDateString();
    this.yesterday = (new Date(new Date().getTime() - 24*60*60*1000)).toLocaleDateString();
    this.today = this.date.toLocaleDateString();
    this.tomorrow = (new Date(new Date().getTime() + 24*60*60*1000)).toLocaleDateString();
    this.twoDaysNext = (new Date(new Date().getTime() + 48*60*60*1000)).toLocaleDateString();
    this.threeDaysNext = (new Date(new Date().getTime() + 72*60*60*1000)).toLocaleDateString();

    this.timeArray = [this.threeDaysBefore, this.twoDaysBefore, this.yesterday, this.today, this.tomorrow, this.twoDaysNext, this.threeDaysNext];
    for(let i=0;i<this.hoursOfTheDay.length;i++){
      this.tableObject.push({hour:i, numberOne:this.generateRandom(101, 255), numberTwo:this.generateRandom(100, 4500)});
    }
  }

  generateRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
  }

  columnTwo(num){
    num = Number(num);
    if(num >= 101 && num <= 150){
      return 'lightgreen';
    }else if(num >= 151 && num <= 200){
      return 'darkorange'; 
    }else{
      return 'red';
    }
  }

  columnThree(num){
    num = Number(num);
    if(num >= 100 && num <=550){
      return 0.3;
    }else if(num >= 551 && num <= 2575){
      return 0.75;
    }else{
      return 1;
    }
  }

  ifRed(num){
    if(num > 200){
      return 'white';
    }else{
      return 'black';
    }
  }

  renewTable(){
    this.tableObject = [];
    for(let i=0;i<this.hoursOfTheDay.length;i++){
      this.tableObject.push({hour:i, numberOne:this.generateRandom(101, 255), numberTwo:this.generateRandom(100, 4500)});
    }
  }

  

}
