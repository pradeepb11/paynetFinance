import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit, OnChanges {


  


  constructor() {
    console.log()
   }



  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnchanges Triggle', changes)
  }

  ngOnInit(): void {
  }



}
