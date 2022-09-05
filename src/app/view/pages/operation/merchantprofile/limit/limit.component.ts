import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import {MerchantprofileService} from '../../../../../service/merchantprofile.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenstorageService} from '../../../../../service/tokenstorage.service';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss']
})
export class LimitComponent implements OnInit {

  mid!: number;
  merchantLimitForm: FormGroup;
  merchant_id:any;
  
  payin:boolean = false;
  payout:boolean = false;

  constructor(
    private merchantService: MerchantprofileService,
    private fb: FormBuilder,
    private tokenStorage:TokenstorageService,
    private notification:NotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.mid = this.route.snapshot.params['id'];
    // console.log(this.mid)
     /***********merchantLimit */
     this.setmerchantLimitForm();

     this.getOneMerchantLimit();
     this.getmerchantsettingDetailspayinpayout();


  }

   /*********************
   * Set Merchant Limit
   */
    setmerchantLimitForm(){
      //merchant id global
      this.merchant_id = this.tokenStorage.getToken();
      // console.log(this.merchant_id)
      const merchant_id = JSON.parse(this.merchant_id);
      // console.log(merchant_id.Data.merchant_id)
  
   
  
      this.merchantLimitForm = this.fb.group({
        paynet_merchant_id: new FormControl(this.mid),
        payment_type: new FormControl(''),
        daily_payin_volume_limit: new FormControl(''),
        daily_payout_volume_limit: new FormControl(''),
        daily_payin_transaction_limit: new FormControl(''),
        daily_payout_transaction_limit: new FormControl(''),
        daily_payin_withdrawal: new FormControl(''),
        daily_payout_withdrawal: new FormControl('')
      })
     }

      /*****************************
      * Merchant Limit
      */
       onSubmitMerchantLimit(){
        this.merchantService.merchantLimitPost(this.merchantLimitForm.value)
        .subscribe(
          (res) =>{
            console.log(res);
            if(res){
              this.notification.showSuccess('','Merchant Limit Insert Sucessfully');
              this.merchantLimitForm.reset();
              this.getOneMerchantLimit();
            }
          }
        )
      } 

      /****************************
       * Get One Merchant Limit
       */
      getOneMerchantLimit(){
       console.log(this.mid)
        this.merchantService.getOneMerchantLimit(this.mid)
        .subscribe(
          (res) => {
            console.log(res.Details);
            this.merchantLimitForm.patchValue(res.Details[0])
          }
        )
      }

  
      getmerchantsettingDetailspayinpayout(){
    

        this.merchantService.getOnemerchantdetailsPayinPayout(this.mid)
        .subscribe(
          (res) =>{
            // console.log(res);
            // console.log(res.Details)
            // console.log(res.Details.gateway_type)
  
            // this.payment_Type.next(res.Details.gateway_type);
  ``
           
  
            if(res.Status === 'Success'){
              // this.merchantchekpayinpayoutForm.patchValue(res.Details);
              // console.log(res.Details.gateway_type === 'Both')
  
              if(res.Details.l2_verified === 'Verified'){
                // this.mercahntSettingActive = true;
              }else{
                // this.mercahntSettingActive = false;
              }
              
              if(res.Details.gateway_type === 'Both' ){
                console.log('0')
                this.payout = true;
                this.payin = true;
                this.merchantLimitForm.controls['payment_type'].patchValue('Both');
                // this.merchantPricingForm.controls['payment_type'].patchValue('Both');
                
  
              } else if(res.Details.gateway_type === 'Payout' ){
                console.log('1')
                this.payout = true;
                this.payin = false;
                this.merchantLimitForm.controls['payment_type'].patchValue('Payout');
                // this.merchantPricingForm.controls['payment_type'].patchValue('Payout');
                // this.mercahntSettingActive = true;
                
              } else if(res.Details.gateway_type === 'Payin'){
                console.log('2')
                this.payout = false;
                this.payin = true;
                this.merchantLimitForm.controls['payment_type'].patchValue('Payin');
                // this.mercahntSettingActive = true;
                // this.merchantPricingForm.controls['payment_type'].patchValue('Payin');
                // this.payoutcheckbox
             
                
              }else if(res.Details.gateway_type === null){
                console.log('blank')
                this.payout = false;
                this.payin = true;
                // this.merchantLimitForm.controls['payment_type'].patchValue('Payin');
                // this.mercahntSettingActive = false;
                // this.merchantPricingForm.controls['payment_type'].patchValue('Payin');
                // this.payoutcheckbox
             
                
              }else{
                console.log('3')
                // this.payout = false;
                // this.payin = false;
                // this.mercahntSettingActive = true;
              }
            }
          }
        )
      }
  
  

}
