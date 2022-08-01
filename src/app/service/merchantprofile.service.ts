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
  getPersonalDetails(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}user/${id}`, httpOptions)
    .pipe(map(res=> res))
  } 

  // Store Details get
  getStoreDetails(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}store/${id}`, httpOptions)
    .pipe(map(res=>res))
  }

  /******Bank Details */
  getBankDetails(id:any): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}bankInfo/${id}`, httpOptions)
    .pipe(map(res=>res))
  }







}
