import { Component, OnInit } from '@angular/core';
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
import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';


@Component({
  selector: 'app-addpaymentprocessor',
  templateUrl: './addpaymentprocessor.component.html',
  styleUrls: ['./addpaymentprocessor.component.scss'],
  providers:[ItprocessorService]
})
export class AddpaymentprocessorComponent implements OnInit {

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

  constructor(
    private fb: FormBuilder,
    private paymentProcessorService: ItprocessorService
  ) { }

  ngOnInit(): void {

    this.setValiidatepaymentProcessorForm();
   
  }

  setValiidatepaymentProcessorForm(){
    this.addpaymentproccingForm = this.fb.group({
      payment_processor_name: new FormControl(''),
      avail_for_merchant: new FormControl(''),
      country: new FormControl(''),
      status: new FormControl(''),
      processor_data: this.fb.array([this.createItemFeild()]),

    })
  }

  processor_data(): FormArray{
    
    return this.addpaymentproccingForm.get('processor_data') as FormArray;
  }


  createItemFeild(){
    
    return this.fb.group({
      processor_type: new FormControl(''),
      api_fields:this.fb.array([this.createSubItemList()])
     
  })
}

createSubItemList(){
  console.log(Object.keys)

  return this.fb.group({
    
    key: [],
    value: []
  })
}

employeeSkills(i: number): FormArray {
  return this.processor_data()
    .at(i)
    .get('api_fields') as FormArray;
}

removeprocessorData(i:any){
  this.processor_data().removeAt(i)
}

addprocessor_data(){

  
  this.processor_data().push(this.createItemFeild());




}

addapi_fields(i:any){
  this.employeeSkills(i).push(this.createSubItemList());
 
 
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

}
