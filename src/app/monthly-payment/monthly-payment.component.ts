
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

    @Input() monthlyPayment!: number;

  constructor() { }


  ngOnInit(): void {
  }

}