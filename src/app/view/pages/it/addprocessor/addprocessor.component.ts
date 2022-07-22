import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addprocessor',
  templateUrl: './addprocessor.component.html',
  styleUrls: ['./addprocessor.component.scss']
})
export class AddprocessorComponent implements OnInit {
  addbankPage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addBank(){
    console.log('working')
    this.addbankPage = true;

  }

  cloneAddBank(){
    this.addbankPage = false;
  }


}
