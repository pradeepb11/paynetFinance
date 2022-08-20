import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MerchantprofileService } from 'src/app/service/merchantprofile.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-merchantlist',
  templateUrl: './merchantlist.component.html',
  styleUrls: ['./merchantlist.component.scss']
})
export class MerchantlistComponent implements OnInit {
  merchantlistData: any;
  merchatFilterForm: FormGroup;
  loading: boolean = true;
  MessageDataInfo: boolean = false;

  p: number = 1;
  total: number = 0;
  filterTerm: string;
  // loading: boolean = false;

  constructor(
    private merchantService: MerchantprofileService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.getAllMerchantList();

    /*********************
     * 
     */
    this.setvalidatemerchatFilterForm();

  }

  pageChangeEvent(event: number){
    this.p = event;
  
  
  }


  setvalidatemerchatFilterForm(){
    this.merchatFilterForm = this.fb.group({
      merchant_status: new FormControl(''),
      paynet_merchant_id: new FormControl(''),
      merchant_store_name: new FormControl(''),
      merchant_email: new FormControl('')
    })
  }


  getAllMerchantList(){
    this.merchantService.getMerchantList()
    .subscribe(
      (res) =>{
        this.loading = false;
        console.log(res);
        this.merchantlistData = res;
      }
    )
  }

  approve(data:any){
    // console.log(data);
    // console.log(data.merchant_id)
    this.router.navigate([`/merchantlist/merchantprofile/${data.merchant_id}`], { relativeTo: this.route })
  }

  onSubmitfilter(){
    // this.merchatFilterForm.value
    let merchant_status = this.merchatFilterForm.get('merchant_status')?.value;
    let paynet_merchant_id = this.merchatFilterForm.get('paynet_merchant_id')?.value;
    let merchant_store_name = this.merchatFilterForm.get('merchant_store_name')?.value;
    let merchant_email = this.merchatFilterForm.get('merchant_email')?.value;
  
    if(merchant_status != '' && paynet_merchant_id != '' && merchant_store_name != '' || merchant_email != ''){
      this.merchantService.searchMerchant(this.merchatFilterForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.merchantlistData = res;
        }
      )
      console.log('done')
    }else{
      console.log('any one data valid');
      this.notification.showWarning('','Please Select 3')
    }

    
  }

  clearFilter(){
    this.merchatFilterForm.reset();
    this.getAllMerchantList();
  }


}
