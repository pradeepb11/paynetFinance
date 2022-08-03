import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {PaymentprocessorfinService} from '../../../../service/paymentprocessorfin.service';

@Component({
  selector: 'app-addpricing',
  templateUrl: './addpricing.component.html',
  styleUrls: ['./addpricing.component.scss']
})
export class AddpricingComponent implements OnInit {

  Add_Pricing:boolean =false;

  addpricingForm: FormGroup;
  paymentprocessorList:any;

  constructor(
    private fb: FormBuilder,
    private paymentProcessorService: PaymentprocessorfinService
  ) { }

  ngOnInit(): void {

    /*************add pricing form input validate */
    this.setvalidateaddpricingForm();

    this.getPaymentprocecssorList();

  }

  setvalidateaddpricingForm(){
    this.addpricingForm = this.fb.group({
    })
  }

  /****************
   * get Payment Processor List
   */
  getPaymentprocecssorList(){
    this.paymentProcessorService.getPaymentProcessorList()
    .subscribe(
      (res) =>{
        // console.log(res);
        this.paymentprocessorList = res;
      }
    )
  }


  onChange(selectedValue:string) {
    console.log('value is ', selectedValue);
  
    
  }


  addpricing(){
    this.Add_Pricing = true;
  }

  addproccingSubmit(){

  }

  cloneAddBank(){
    this.Add_Pricing = false;
  }

}
