import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import {MerchantprofileService} from '../../../../../service/merchantprofile.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenstorageService} from '../../../../../service/tokenstorage.service';

@Component({
  selector: 'app-merchantpricing',
  templateUrl: './merchantpricing.component.html',
  styleUrls: ['./merchantpricing.component.scss']
})
export class MerchantpricingComponent implements OnInit {

  mid!: number;
  merchantPricingForm: FormGroup;
  merchant_id:any

  selectvaluepaymentprocessorid:any;
  profileMethod:any;
  processorList: any;


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

        /************Merchant Pricing Form */
        this.setMerchantPricingForm();

    this.getOneMerchantPricing();
    this.getMerchantProfileList(); // Merchant Profile List
  }

  
  /********************
   * set Merchant Pricing Form
   */
   setMerchantPricingForm(){

    //merchant id global
    this.merchant_id = this.tokenStorage.getToken();
    // console.log(this.merchant_id)
    const merchant_id = JSON.parse(this.merchant_id);
    // console.log(merchant_id.Data.merchant_id)


    this.merchantPricingForm = this.fb.group({
      paynet_merchant_id: new FormControl(this.mid),
      pricing_data: this.fb.array([this.createItemFeild()])
    })
  }

   pricingDATA(): FormArray{
    return <FormArray> this.merchantPricingForm.get('pricing_data');
  }

  

  createItemFeild(){

 
    return this.fb.group({
      payment_processor_id: new FormControl(''),
      processor_method_id: new FormControl(''),
      processor_type: new FormControl(''),
      percentage: new FormControl(''),
      flat_amount:  new FormControl('')
    
     
  })
}

 /**********************
        * add more pricing button click event
        */
  addmoremerchantPrice(){
    this.pricingDATA().push(this.createItemFeild())
  }




 /*************************
       * Merchant Pricing On Submit 
       */
  onSubmitMerchantPricing(){
    this.merchantService.postmerchantPriceDetails(this.merchantPricingForm.value)
    .subscribe(
      (res) => {
        if(res.Status === 'Success'){
          this.notification.showSuccess('','Merchant Pricing Insert Sucessfully');

          this.merchantPricingForm.reset();
          this.getOneMerchantPricing();
        }
      }
    )
   }

   /**************************
    * Get One Merchant Pricing 
    */
  getOneMerchantPricing(){
   
    this.merchantService.getmerchantPricingDetails(this.mid)
    .subscribe(
      (res) =>{
        // console.log(res);
        // this.merchantPricingForm.patchValue(res)
      }
    )
  } 

   /*********************
   * on change paymentProcessorId
   */
    onChangepaymentprocessorid(selectedValue:string){
      console.log(selectedValue);
      this.selectvaluepaymentprocessorid = selectedValue;
      this.getmerchantProfileMethodList() // Merchant Profile Method List
     }

       /************************
   * get Merchant Profile Method List
   */
  getmerchantProfileMethodList(){
    this.merchantService.getmerchantProcessorMethodList(this.selectvaluepaymentprocessorid)
    .subscribe(
      (res) =>{
        console.log(res);
        this.profileMethod= res;
      }
    )
  }


  

   /************************
    * get Merchant Profile Lisit
    */
    getMerchantProfileList(){
      this.merchantService.getmerchantProcessorList()
      .subscribe(
        (res) =>{
          // console.log(res);
          this.processorList = res
        }
      )
    }





}
