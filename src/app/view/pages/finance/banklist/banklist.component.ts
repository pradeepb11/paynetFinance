import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.scss']
})
export class BanklistComponent implements OnInit {

  addbankPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addBank(){

    this.addbankPage = true;

  }

  cloneAddBank(){
    this.addbankPage = false;
  }

}
