import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ItprocessorService } from 'src/app/service/itprocessor.service';
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
  Dataaddpricing:any;

   p: number = 1;
  total: number = 0;
  filterTerm: string;

  methodCC:boolean= false;
  methodDC:boolean= false;
  methodNB:boolean= false;
  methodTP:boolean= false;
  methodPO:boolean= false;

  constructor(
    private fb: FormBuilder,
    private paymentProcessorService: PaymentprocessorfinService,
    private ProcessorService: ItprocessorService,
  ) { }

  ngOnInit(): void {

    /*************add pricing form input validate */
    this.setvalidateaddpricingForm();

    this.getPaymentprocecssorList();
    this.getpaymentProcessor();
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

  
/*****************************************************
 * Get Payment Processor 
 * */ 
getpaymentProcessor(){
  this.ProcessorService.getPaymentProcessor()
  .subscribe(
    (res) =>{
      console.log(res);
      this.Dataaddpricing = res;
      this.Dataaddpricing.forEach((element:any) => {
          console.log(element.method_type)
          if(element.method_type[0] ==='CC'){
            // console.log('CC');
            this.methodCC = true;
            // console.log(this.methodCC)
          }else if(element.method_type[1] ==='DC'){
            // console.log('DC');
            this.methodDC =true;
            this.methodCC = false;
            console.log(this.methodDC)
          }else if(element.method_type[2] ==='NB'){
            console.log('NB');
            this.methodNB = true;
            this.methodCC= false;
            this.methodDC= false;
          }else if(element.method_type[3] ==='TP'){
            console.log('TP');
            this.methodTP = true;
            this.methodCC = false;
            this.methodDC= false;
            this.methodNB =false;
          }else if(element.method_type[4] ==='PO'){
            console.log('PO');
            this.methodPO= true;
            this.methodCC= false;
            this.methodDC = false;
            this.methodNB= false;
            this.methodTP= false;
          }
      });
    }
  )
  
} 


pageChangeEvent(event: number){
  this.p = event;


}



}
