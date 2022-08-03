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
export class PaymentprocessorfinService {

  constructor(
    private _http: HttpClient
  ) { }


  getPaymentProcessorList(): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}payment_processor_master/ProcessorList/`, httpOptions)
    .pipe(map(res=>res))
  }



}
