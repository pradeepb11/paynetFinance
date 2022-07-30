import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";
import { Subject } from 'rxjs';

import {ItprocessorService, paymentprocessor} from '../../../../service/itprocessor.service';



@Component({
  selector: 'app-addpaymentprocessor',
  templateUrl: './addpaymentprocessor.component.html',
  styleUrls: ['./addpaymentprocessor.component.scss'],
  providers:[ItprocessorService]
})
export class AddpaymentprocessorComponent implements OnInit, AfterContentInit {

  addbankPage: boolean = false;
  submitted = false;
  // formgroup
  addpaymentproccingForm: FormGroup;
  myFormValueChanges$:any;
  display: any;
  empForm: FormGroup;
  selectedValueProcessor = new Subject;
 
  //
  defaultNavActiveId = 1;
  defaultNavCode: any;
  horizontalAlignmentCenterCode: any;
  horizontalCenterCode: any;
  horizontalEndCode: any;
  verticalNavCode: any;
  fillJustifyNavCode: any;
  navWidthDropdownCode: any;
  processorTypes:any;



  constructor(
    private fb: FormBuilder,
    private paymentProcessorService: ItprocessorService
  ) { }



  ngAfterContentInit(): void {
     console.log(this.defaultNavActiveId);
     if(this.defaultNavActiveId === 1){
      this.processorTypes = 'CC';
     }
     console.log(this.processorTypes)
  }

  ngOnInit(): void {
  this.setValiidatepaymentProcessorForm();
  
  }

  setValiidatepaymentProcessorForm(){
    this.addpaymentproccingForm = this.fb.group({
      payment_processor_name: new FormControl(''),
      avail_for_merchant: new FormControl(''),
      country: new FormControl(''),
      status: new FormControl(''),
      processor_type: new FormControl('CC'),

    })
  }

  processor_data(): FormArray{
    
    return this.addpaymentproccingForm.get('processor_data') as FormArray;
  }

  createItemFeild(){
    
    return this.fb.group({
      processor_type: new FormControl(''),
      api_fields:this.fb.array([])
     
  })
}



  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

  addBank(){
    console.log('working')
    this.addbankPage = true;
   
  }

  closeAddBank(){
    this.addbankPage = false;
  }

  addproccingSubmit(){

  }

  changeTab(event:any) {
  console.log(event)
  }

  processorType(name:any){
    if(this.defaultNavActiveId === this.defaultNavActiveId){
      console.log(name)
      if(name === 'CC'){
        console.log('cc WOrking');


      } else if(name === 'DC'){
        console.log('dc Working')
      }
    }
  
  }


}
