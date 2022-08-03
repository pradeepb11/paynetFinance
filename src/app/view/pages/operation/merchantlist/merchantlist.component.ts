import { Component, OnInit } from '@angular/core';
import { MerchantprofileService } from 'src/app/service/merchantprofile.service';

@Component({
  selector: 'app-merchantlist',
  templateUrl: './merchantlist.component.html',
  styleUrls: ['./merchantlist.component.scss']
})
export class MerchantlistComponent implements OnInit {
  merchantlistData: any;

  constructor(
    private merchantService: MerchantprofileService,
  ) { }

  ngOnInit(): void {
    this.getAllMerchantList();
  }

  getAllMerchantList(){
    this.merchantService.getMerchantList()
    .subscribe(
      (res) =>{
        console.log(res);
        this.merchantlistData = res;
      }
    )
  }

}
