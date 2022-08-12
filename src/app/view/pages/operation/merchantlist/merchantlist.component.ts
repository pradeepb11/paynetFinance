import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllMerchantList();
  }

  getAllMerchantList(){
    this.merchantService.getMerchantList()
    .subscribe(
      (res) =>{
        // console.log(res);
        this.merchantlistData = res;
      }
    )
  }

  approve(data:any){
    // console.log(data);
    // console.log(data.merchant_id)
    this.router.navigate([`/merchantlist/merchantprofile/${data.merchant_id}`], { relativeTo: this.route })
  }


}
