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
export class ItprocessorService {

  constructor(
    private _http: HttpClient
  ) { }


  /*************
   * post payment processor 
   * 
   */
  postPaymentProcessor(paymentprocessor: paymentprocessor): Observable<paymentprocessor>{
    return this._http.post<paymentprocessor>(`${baseUrl_py}payment_processor_master`, paymentprocessor, httpOptions)
    catchError(this.handleError)
  }



  private handleError(err: HttpErrorResponse){
    
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      console.log('dsadsad')
        errorMessage = `An error occurred ${err.error.message}`;
        console.log('Error Occurred');
    } else {
      console.log('dsadsad123')
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.log('Server returned code');
    }
    console.log('123456789')
    console.error(errorMessage);
    return throwError(errorMessage);
}




}





export interface paymentprocessor {
  Status: string;
  payment_processor_name: string;
  processor_data: [
    processor_type: string,
    api_fields:[
      key:string,
      value: string,
    ]
  ];
  avail_for_merchant: string;
  status: string;
  currency: string;
  country: string;
 
}