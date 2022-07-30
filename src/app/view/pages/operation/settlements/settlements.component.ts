import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit, OnChanges {
  imageSrc: any;

  


  constructor() {
    console.log()
   }



  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnchanges Triggle', changes)
  }

  ngOnInit(): void {
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }



}

}
