import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.scss']
})
export class AdjustmentsComponent implements OnInit {
  creditPage: boolean = false;
  debitPage: boolean = false;

  constructor() {
    
   }


  ngOnInit(): void {
    
  }
  openCredit(){
    this.creditPage = true;
    this.debitPage = false;
  }
  openDebit(){
    this.creditPage = false;
    this.debitPage = true;
  }

  closeCredit(){
    this.creditPage = false;
    this.debitPage = false;
  }

}
