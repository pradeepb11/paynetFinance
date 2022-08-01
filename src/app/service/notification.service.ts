import { Injectable } from '@angular/core';

import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  // show Success
 showSuccess(message:any, title:any) {
  this.toastr.success(message, title)
}     

// Show Error
showError(message:any, title:any){
  this.toastr.error(message,title)
}

// Show Info
showInfo(message:any, title:any){
  this.toastr.info(message, title)
}

// show Warning
showWarning(message:any, title:any){
  this.toastr.warning(message, title)
}



}
