import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, throwError } from 'rxjs';
// interface
import {User} from '../interface/user';
// enviroment
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl_py = `${environment.apiUrl_python}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedUserSubject: BehaviorSubject<User>;
  public loggedInUserFin: Observable<User>;

  constructor(
    private http: HttpClient,
  ) {
    this.loggedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedInUserFin') || '{}'));
    this.loggedInUserFin = this.loggedUserSubject.asObservable();
   }

   private loggedInStatus = JSON.parse(localStorage.getItem('loggedInUserFin') || ('false'));

   public get loggedInUserValue(): User {
    // console.log(this.loggedUserSubject.value);
    return this.loggedUserSubject.value;
  }

  public get LoginStatus(){
    return JSON.parse(localStorage.getItem('loggedInUserFin') || this.loggedInStatus.toString());
  }


   // loginUser
   

   loginUser(email: string, password:string): Observable<any>{
    return this.http.post<any>(`${baseUrl_py}login`, {email, password}, httpOptions)
    .pipe(map(
      (res) =>{
        // console.log(res)
        if(res.Status === 'Success'){
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loggedInUserFin', JSON.stringify(res));
        this.loggedUserSubject.next(res);
        }else{
         localStorage.removeItem('loggedInUserFin');
          }
        return res;
      }
      
    ))
  }

  
  registrationUser(userregister: RegistrationUser): Observable<RegistrationUser>{
    return this.http.post<RegistrationUser>(`${baseUrl_py}Register`, userregister, httpOptions)
    catchError(this.handleError)

  }


  


  // Logout User
  logOutUsers() {
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null!);

  }


  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = `An error occurred ${err.error.message}`;
        console.log('Error Occurred');
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.log('Server returned code');
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
}



export interface RegistrationUser {
  first_name:string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  status: number;
}