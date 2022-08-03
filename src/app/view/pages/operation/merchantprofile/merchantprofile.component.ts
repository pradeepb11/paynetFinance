import { Component, OnInit, ViewChild } from '@angular/core';
import {MerchantprofileService} from '../../../../service/merchantprofile.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import {TokenstorageService} from '../../../../service/tokenstorage.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/service/notification.service';


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

  cancelled_chq_url:any;
  bank_stmt_url:any;

  kycDetailsForm: FormGroup;
  pan_url:any;
  aadhar_url:any;

  questionnaireForm: FormGroup;

  banksNamelist: any;

  childmessage = false;
  approveMerchantConfirm:boolean = true;

  closeResult = '';

  approveAccountForm: FormGroup;



  constructor(
    private merchantService: MerchantprofileService,
    private fb: FormBuilder,
    private tokenStorage:TokenstorageService,
    private modalService: NgbModal,
    private notification:NotificationService
  ) { }

  ngOnInit(): void {
    /***validateForm */
    this.setValidatepersonaInfoData();
    /*****Store Detials */
    this.setvalidateStoreDate();
    /******Bank Details */
    this.setBankDataForm();
    /******Kyc Details */
    this.setvalidatekycDetailsForm();
    /*******questionnaireForm */
    this.setquestionnaireForm();
    /*******approveForm */
    this.setverifyAccountForm();

    this.getMerchantProfile();
    this.getStoreData();
    this.getBankData();
    this.getKYCData();
    this.getQuestionnaire();
    this.getAllBanksList();

    


  }


  /*********************
   * set questionnaire Form
   */
   setquestionnaireForm(){
      //merchant id global
      this.merchant_id = this.tokenStorage.getToken();
      // console.log(this.merchant_id)
      const merchant_id = JSON.parse(this.merchant_id);
      // console.log(merchant_id.Data.merchant_id)


    this.questionnaireForm = this.fb.group({
      paynet_merchant_id: new FormControl(merchant_id.Data.merchant_id),
      nature_of_business: new FormControl('',Validators.required),
      number_of_years_in_business: new FormControl('', Validators.required),
      number_of_transactions_per_month: new FormControl('', Validators.required),
      physical_store_location: new FormControl('', Validators.required),
      countries_delivering_to: new FormControl('', Validators.required),
      delivery_methods_used: new FormControl('', Validators.required),
      fraud_experienced: new FormControl('', Validators.required),
      value_of_transaction_per_month: new FormControl('', Validators.required)
    })
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

/*****************************
 * kycDetails Form
 */
  setvalidatekycDetailsForm(){
     //merchant id global
     this.merchant_id = this.tokenStorage.getToken();
     // console.log(this.merchant_id)
     const merchant_id = JSON.parse(this.merchant_id);
     // console.log(merchant_id.Data.merchant_id)
    this.kycDetailsForm = this.fb.group({
      paynet_merchant_id: new FormControl(merchant_id.Data.merchant_id),
      aadhar_no: new FormControl('', [Validators.required, ]),
      aadhar_holder_name: new FormControl('', Validators.required),
      aadhar_url: new FormControl('', Validators.required),
      pan_no: new FormControl('', [Validators.required, Validators.pattern('[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}')]),
      pan_holder_name: new FormControl('', Validators.required),
      pan_url: new FormControl('', Validators.required)
    })
  }





/********
 * Bank Data Form
 */
  setBankDataForm(){
    //merchant id global
    this.merchant_id = this.tokenStorage.getToken();
    // console.log(this.merchant_id)
    const merchant_id = JSON.parse(this.merchant_id);
    // console.log(merchant_id.Data.merchant_id)

    this.bankDetailsForm = this.fb.group({
      paynet_merchant_id: new FormControl(merchant_id.Data.merchant_id),
      bank_id: new FormControl(''),
      account_number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9,18}')]),
      account_holder_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      bank_stmt_url: new FormControl(''),//img upload 
      cancelled_chq_url: new FormControl(''),//img upload 
      status: new FormControl('1'),
      bank_info: this.fb.group({
        Address: new FormControl('',Validators.required),
        City: new FormControl('', Validators.required),
        District: new FormControl('', Validators.required),
        State: new FormControl('', Validators.required),
        Branch: new FormControl('', Validators.required),
        IFSC: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]{4}0[A-Z0-9a-z]{6}$')]),
        pin_code: new FormControl('', [Validators.required,Validators.pattern('([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})')]),
        
      })
    })
  }

  /***********
   * 
   */
   setverifyAccountForm(){
    this.approveAccountForm = this.fb.group({
      approved: new FormControl(''),
      rejected: new FormControl(''),
      comment: new FormControl('')
    })
   }


  /***************
   * bank name liist
   */
   getAllBanksList(){
    this.merchantService.getAllBanksName()
    .subscribe(
      (res) => {
        // console.log(res);
        this.banksNamelist = res;
        // console.log(this.banksNamelist)
      }
    )
  }



  /***************
   * Questionnaire
   */
  getQuestionnaire(){
     //merchant id global
     this.merchant_id = this.tokenStorage.getToken();
     // console.log(this.merchant_id)
     const merchant_id = JSON.parse(this.merchant_id);
     // console.log(merchant_id.Data.merchant_id)

     this.merchantService.getquestionnaire(merchant_id.Data.merchant_id)
     .subscribe(
      (res)=>{
        console.log(res);
        if(res.status === 'success'){
          this.questionnaireForm.patchValue(res.detail);
        

        }
      }
     )
  }


  /*********
   * KYC
   */
  getKYCData(){

      //merchant id global
      this.merchant_id = this.tokenStorage.getToken();
      // console.log(this.merchant_id)
      const merchant_id = JSON.parse(this.merchant_id);
      // console.log(merchant_id.Data.merchant_id)
      
      this.merchantService.getKYCDetails(merchant_id.Data.merchant_id)
      .subscribe(
        (res) =>{
          // console.log(res)
          if(res.status === 'success'){
            this.kycDetailsForm.patchValue(res.detail);
            this.aadhar_url = res.detail.aadhar_url;
            this.pan_url = res.detail.pan_url;

          }
        }
      )

  }

  // get Merchant Profile 
  getMerchantProfile(){
    //merchant id global
    this.merchant_id = this.tokenStorage.getToken();
    // console.log(this.merchant_id)
    const merchant_id = JSON.parse(this.merchant_id);
    // console.log(merchant_id.Data.merchant_id)
    this.merchantService.getPersonalDetails(merchant_id.Data.merchant_id)
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
     //merchant id global
     this.merchant_id = this.tokenStorage.getToken();
     // console.log(this.merchant_id)
     const merchant_id = JSON.parse(this.merchant_id);
     // console.log(merchant_id.Data.merchant_id)
    this.merchantService.getStoreDetails(merchant_id.Data.merchant_id)
    .subscribe(
      (res) =>{
        // console.log(res);
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
      //merchant id global
      this.merchant_id = this.tokenStorage.getToken();
      // console.log(this.merchant_id)
      const merchant_id = JSON.parse(this.merchant_id);
      // console.log(merchant_id.Data.merchant_id)
    this.merchantService.getBankDetails(merchant_id.Data.merchant_id)
    .subscribe(
      (res) =>{
        // console.log(res);
        if(res.status === 'success'){
          // console.log(res.detail)
          this.bankDetailsForm.patchValue(res.detail);
          // console.log(this.bankDetailsForm.patchValue(res.detail))
          this.bank_stmt_url = res.detail.bank_stmt_url;
          this.cancelled_chq_url = res.detail.cancelled_chq_url
        }
      }
    )
  }



  approveMerchant(RefundData:any){
    console.log('working')
    this.modalService.open(RefundData, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // this.modalService.open(content)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

/***************************
 *  Approve account Yes
 */
  approveAccountYes(){
    // alert('Confirm to approver Your Account');
     //merchant id global
     this.merchant_id = this.tokenStorage.getToken();
     // console.log(this.merchant_id)
     const merchant_id = JSON.parse(this.merchant_id);
     // console.log(merchant_id.Data.merchant_id)
    let commentValueApproveYes = this.approveAccountForm.controls['comment'].value;
    // console.log(commentValueApproveYes)
     
    this.approveAccountForm = this.fb.group({
      approved: new FormControl(1),
      rejected: new FormControl(0),
      comment:  new FormControl(commentValueApproveYes)
    })
    
     this.merchantService.verrifyMerchant(merchant_id.Data.merchant_id, this.approveAccountForm.value)
     .subscribe(
      (res) => {
        console.log(res)
        if(res.Status === 'Success'){
          console.log(this.approveAccountForm.value)
          this.notification.showSuccess('',res.Message)
        }
      }
     )
    
    this.modalService.dismissAll()
  }

  /***************************
 *  Approve account Cancel
 */
  approveAccountCancel(){
    console.log('cancel')
  }

  /**************************
   * reject Merchant 
   */
   rejectMerchant(RejectMerchantData:any){
    this.modalService.open(RejectMerchantData, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }

   /************************
    * Reject Merchant Click Yes
    */
    rejectMerchantAccountYes(){
      
     //merchant id global
     this.merchant_id = this.tokenStorage.getToken();
     // console.log(this.merchant_id)
     const merchant_id = JSON.parse(this.merchant_id);
     // console.log(merchant_id.Data.merchant_id)

     let commentValueRejectedMerchant = this.approveAccountForm.controls['comment'].value;
     // console.log(commentValueApproveYes)

     this.approveAccountForm = this.fb.group({
      approved: new FormControl(0),
      rejected: new FormControl(1),
      comment: new FormControl(commentValueRejectedMerchant)
    })

    
    this.merchantService.verrifyMerchant(merchant_id.Data.merchant_id, this.approveAccountForm.value)
    .subscribe(
      (res) =>{
        if(res.Status === 'Success'){
          console.log(this.approveAccountForm.value)
          this.notification.showSuccess('',res.Message)
        }
      }
    )

    this.modalService.dismissAll();


    }

    updateNext(){
      let next = (this.active += 1);
      console.log(next)
    }
  
    updatePrev(){
      let next = (this.active -= 1);
    }





}
