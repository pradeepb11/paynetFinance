import { Component, OnInit } from '@angular/core';
import {MerchantprofileService} from '../../../../service/merchantprofile.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import {TokenstorageService} from '../../../../service/tokenstorage.service';


@Component({
  selector: 'app-merchantprofile',
  templateUrl: './merchantprofile.component.html',
  styleUrls: ['./merchantprofile.component.scss'],
  providers:[MerchantprofileService]
})
export class MerchantprofileComponent implements OnInit {

  defaultNavActiveId = 1;
  defaultNavCode: any;

  merchantSettingNavActiveId = 1;
  merchantSettingNavCode: any;


  horizontalAlignmentCenterCode: any;
  horizontalCenterCode: any;
  horizontalEndCode: any;
  verticalNavCode: any;
  fillJustifyNavCode: any;
  navWidthDropdownCode: any;
  active = 1;

  personaInfoDataForm: FormGroup;
  storeDetailsForm: FormGroup;
  bankDetailsForm: FormGroup;

  storelogo:any;
  terms_conditions_url:any;

  merchant_id:any;


  constructor(
    private merchantService: MerchantprofileService,
    private fb: FormBuilder,
    private tokenStorage:TokenstorageService
  ) { }

  ngOnInit(): void {
    /***validateForm */
    this.setValidatepersonaInfoData();
    /*****Store Detials */
    this.setvalidateStoreDate();
    /******Bank Details */
    this.setBankDataForm();

    this.getMerchantProfile();
    this.getStoreData();
    this.getBankData();



    //merchant id global
    this.merchant_id = this.tokenStorage.getToken();
    // console.log(this.merchant_id)
    const merchant_id = JSON.parse(this.merchant_id);
    // console.log(merchant_id.Data.merchant_id)


  }

  /*********
   * Form Personal Data
   */
  setValidatepersonaInfoData(){
    this.personaInfoDataForm = this.fb.group({
      user_id:new FormControl(''),
      first_name : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      last_name : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      email : new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      dob: new FormControl('', Validators.required),
      phone_number: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
    })
  }

/**********
 * Store Data
 */
setvalidateStoreDate(){
  this.storeDetailsForm = this.fb.group({
    paynet_merchant_id: new FormControl(''),
    account_type: new FormControl(''),
    store_name: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    state: new FormControl(''),
    web_url: new FormControl(''),
    store_logo_url: new FormControl(''),
    cust_service_no: new FormControl(''),
    charge_back_no: new FormControl(''),
    cust_service_email: new FormControl(''),
    terms_conditions_url: new FormControl(''),
    charge_back_email: new FormControl(''),
    work_days: new FormControl(''),
    timings_from: new FormControl(''),
    timings_to: new FormControl(''),
    gst_no: new FormControl('')
  })
}

/********
 * Bank Data Form
 */
  setBankDataForm(){
    


    this.bankDetailsForm = this.fb.group({
      
    })
  }

  // get Merchant Profile 
  getMerchantProfile(){
    
    this.merchantService.getPersonalDetails(this.merchant_id.Data.merchant_id)
    .subscribe(
      (res) =>{
        // console.log(res);
        if(res.status === 'success'){
          this.personaInfoDataForm.patchValue(res.detail[0]);
        }
      }
    )
  }

  /*****************
   * get Store Data 
   */
  getStoreData(){
    this.merchantService.getStoreDetails(this.merchant_id.Data.merchant_id)
    .subscribe(
      (res) =>{
        console.log(res);
        if(res.status === 'success'){
          this.storeDetailsForm.patchValue(res.detail);
          this.storelogo = res.detail['store_logo_url'];
          this.terms_conditions_url = res.detail['terms_conditions_url']
        }
        
      }
    )
  }

  /********
   * get Bank Data
   */
  getBankData(){
    this.merchantService.getBankDetails(this.merchant_id.Data.merchant_id)
    .subscribe(
      (res) =>{
        console.log(res)
      }
    )
  }




}
