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
export class BankmasterService {

  constructor(
    private _http: HttpClient
  ) { }


  /*****************
   * Get Bank List
   */
  getBankList(): Observable<any>{
    return this._http.get<any>(`${baseUrl_py}bankmaster`)
    .pipe(map(res=>res))

  }

  /*****************
   * POST Bnak List
   */
  postBankList(bankdata: BankData): Observable<BankData>{
    return this._http.post<BankData>(`${baseUrl_py}bankmaster`, bankdata, httpOptions )
    .pipe(map(res=>res))
  }

  /********
   * 
   * Gett By One Bank 
   */
  getOneBank(id:number): Observable<any>{
    return this._http.get(`${baseUrl_py}bankmaster/${id}`, httpOptions)
    .pipe(map(res=>res))
  }

  /**********
   * 
   * Put Bank Data
   */
  putBankDetails(id: number, bankdata:BankData): Observable<BankData>{
    return this._http.put<BankData>(`${baseUrl_py}bankmaster/${id}`, bankdata)
    .pipe(map(res=>res))
  }






}


export interface BankData{
  bank_code: string;
  bank_name: string;
  status: number;
}