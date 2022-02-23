
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/currency.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }


  changeCurrency(e){
    this.currencyService.setCurrency(e.target.value);
  }
  

}
