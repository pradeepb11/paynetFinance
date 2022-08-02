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