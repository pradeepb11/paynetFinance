import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl_py = `${environment.apiUrl_python}`;


@Injectable({
  providedIn: 'root'
})
export class MerchantprofileService {

  constructor(
    private _http: HttpClient
  ) { }

  //mercahnt list Display
  getMerchantList(): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}merchant_list`, httpOptions)
    .pipe(map(res=>res))
  }

  // merchant Profile Get
  getPersonalDetails(id:any): Observable<PerosnalInformation>{
    return this._http.get<PerosnalInformation>(`${baseUrl_py}user/${id}`, httpOptions)
    .pipe(map(res=> res))
  } 

  // Store Details get
  getStoreDetails(id:any): Observable<StoreInformation>{
    return this._http.get<StoreInformation>(`${baseUrl_py}store/${id}`, httpOptions)
    .pipe(map(res=>res))
  }

  /******Bank Details */
  getBankDetails(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}bankInfo/${id}`, httpOptions)
    .pipe(map(res=>res))
  }

  /******KYC Detials */
  getKYCDetails(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}kyc/${id}`, httpOptions)
    .pipe(map(res=>res))
  }

/******** questionnaire */
getquestionnaire(id:any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}question/${id}`, httpOptions)
  .pipe(map(res=>res))
}  

// bank names list
getAllBanksName(): Observable<BankNamesList>{
  return this._http.get<BankNamesList>(`${baseUrl_py}bankmaster` ,httpOptions)
  .pipe(map(res=>res))
}

/**********
 * VerifyMerchant
 */
verrifyMerchant(id:any, dataStatus:Verify_merchant): Observable<any>{
  return this._http.put<any>(`${baseUrl_py}verify_merchant/${id}`,dataStatus, httpOptions)
  .pipe(map(res=>res))
}

/******************
 * Merchant verify_merchant ang get 'Pending', 'Verified', 'Rejected'
 */

getVertifymerchantStatus(id:any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}verify_merchant/${id}`, httpOptions)
  .pipe(map(res=>res))
}


/*******************
 * Merchant DeTails payin PyOut PUT
 */
putmerchantdetailsPayinPayout(id: any, merchantpayinpayout:mercahntpayinpayout): Observable<any>{
  return this._http.put<any>(`${baseUrl_py}merchant/${id}`, merchantpayinpayout, httpOptions)
  .pipe(map(res=>res))
}

/*******************
 * Merchant DeTails payin PyOut GET ONE
 */
getOnemerchantdetailsPayinPayout(id:any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}merchant/${id}`, httpOptions)
  .pipe(map(res=>res))
}

/*******************
 * 
 * Webhook URL Get
 */
getWebhookurl(id:any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}webhook/${id}`, httpOptions)
  .pipe(map(res=>res))
}

/*******************
 * mERCHANT LIMIT
 */
merchantLimitPost(mchtLimit: merchantLimit): Observable<merchantLimit>{
return this._http.post<merchantLimit>(`${baseUrl_py}merchant_limit`, mchtLimit, httpOptions)
.pipe(map(res=>res))
}

/*******************
 * Get One Merchant LIMIT
 */
getOneMerchantLimit(id:any):Observable<any>{
  return this._http.get<any>(`${baseUrl_py}merchant_limit/${id}`, httpOptions)
  .pipe(map(res =>res))
}

/******************
 * merchant ProcessorList
 */
getmerchantProcessorList():Observable<any>{
  return this._http.get<any>(`${baseUrl_py}payment_processor_master/ProcessorList/`, httpOptions)
  .pipe(map(res=>res))
} 

/********************
 * Get Merchant ProcessorMethodList
 */
getmerchantProcessorMethodList(id:any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}payment_processor_master/ProcessorMethodList/${id}`, httpOptions)
  .pipe(map(res => res))
}

/*******************
 * POST Merchant Price Details
 */
  postmerchantPriceDetails(priceDetails: merchantPriceDetails): Observable<any>{
    return this._http.post<any>(`${baseUrl_py}merchant_pricing_details`, priceDetails, httpOptions)
    .pipe(map(res => res))
  }
/*********************
 * GET One Merchant Price Details
 * */  
getmerchantPricingDetails(id: any): Observable<any>{
  return this._http.get<any>(`${baseUrl_py}merchant_pricing_details/${id}`, httpOptions)
  .pipe(map(res => res))
}


  /*************************
   * MIDCreation GET
   */
  getMIDCreation(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}merchant_pricing_details/MIDCreation/${id}`, httpOptions)
    .pipe(map(res => res))
  }

  /**************************
   * MIDCreation PUT
   */
  PUTMIDCreation(id:any, midcreationData:MIDcreation): Observable<any>{
    return this._http.put<any>(`${baseUrl_py}merchant_pricing_details/MIDCreation/${id}`, midcreationData, httpOptions)
  }






}



export interface PerosnalInformation {
  detail: any;
  first_name:string;
  last_name: string;
  dob: string;
  email: string;
  phone_number: string;
  status: string;
  Data:string;
  
}

export interface kycInformation {
  Status: string;
  detail: any;
  paynet_merchant_id:number;
  aadhar_no: string;
  aadhar_holder_name: string;
  aadhar_url: string;
  pan_no: string;
  pan_holder_name: string;
  pan_url: string;
  status: string;
  
}

export interface StoreInformation {
  detail: { [key: string]: any; };
  status: string;
  paynet_merchant_id:number;
  store_name:string;
  web_url: string;
  store_logo_url: string;
  address1: string;
  address2: string;
  city: string;
  pincode: string;
  state: string;
  charge_back_no: string;
  charge_back_email: string;
  cust_service_no: string;
  cust_service_email: string;
  work_days: string;
  timings: string;
  gst_no: string;
  terms_conditions_url: string;
}


export interface BankInfoData{
  paynet_merchant_id: number;
  account_number: number;
  account_holder_name:number;
  bank_stmt_url:string;
  status: string;
  bank_info:{
    Address:string;
    City:string;
    District: string;
    State: string;
    Branch: string;
    IFSC: string;
  }
  detail:string;
}


export interface BankNamesList {
  detail: any;
  bank_code:string;
  bank_id: string;
  bank_name: string;
  status: string;

}

export interface Quessionaire{
  status: string;
  paynet_merchant_id: number;
  nature_of_business: string;
  number_of_years_in_business: string;
  number_of_transactions_per_month: string;
  physical_store_location: string;
  countries_delivering_to:string;
  delivery_methods_used: string;
  fraud_experienced: string;
}

export interface Verify_merchant{
  approved: number;
  rejected: number;
  comment: string;
}

export interface mercahntpayinpayout{
  gateway_type: string;
  security_deposit: number;
  merchant_balance: number;
  payin_committed_volume: string;
  payout_committed_volume: string;
  status: number;
}


export interface merchantLimit{
  Status: string;
  paynet_merchant_id: number;
  payment_type: string;
  daily_payin_volume_limit: string;
  daily_payin_transaction_limit: string;
  daily_payout_volume_limit: string;
  daily_payout_transaction_limit: string;
  daily_payin_withdrawal: string;
  daily_payout_withdrawal: string;
}

export interface merchantPriceDetails{

  paynet_merchant_id: number;
  pricing_data:[
    payment_processor_id: number,
    processor_method_id: number,
    processor_type: string,
    percentage: string,
    flat_amount: number
  ]

  
}


export interface MIDcreation{
  
  pricing_data:[
    {
      payment_processor_id: string,
      processor_method_id: string;
      api_fields_value:[
        string
      ]
    }
  ]

 
}