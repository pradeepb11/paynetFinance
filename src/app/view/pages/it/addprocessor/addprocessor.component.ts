import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";

@Component({
  selector: 'app-addprocessor',
  templateUrl: './addprocessor.component.html',
  styleUrls: ['./addprocessor.component.scss']
})
export class AddprocessorComponent implements OnInit {
  addbankPage: boolean = false;
  submitted = false;
  // formgroup
  addproccingForm: FormGroup;
  public customerList: FormArray;
  myFormValueChanges$:any;
  display: any;

  
  cards = [{ name: "Credit Card",value:'CC' }, { name: "Debit Card", value:'DC' }, { name: "Net banking", value:'NB' }, { name: 'Third Party', value:'TP' },{name: 'Pay Out', value:'PO'}]



  constructor(
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {

  this.setValidateAddprocessor();
 
  this.customerList = this.addproccingForm.get('processor_data') as FormArray;
   

  }
  
  setValidateAddprocessor(){
    this.addproccingForm = this.fb.group({
      payment_processor_name: new FormControl(''),
      avail_for_merchant: new FormControl(''),
      processor_data: this.fb.array([this.createItemFeild()]),
      country: new FormControl(''),
      status: new FormControl(''),
      currency: new FormControl('INR'),
      
    })
  }


 
  get customerFormGroup(){
    return this.addproccingForm.get('processor_data') as FormArray;
  }

  createItemFeild(){
    
      return this.fb.group({
        processor_type: new FormControl(''),
        api_fields:this.fb.array([this.createSubItemList()])
       
    })
  }

  createSubItemList(){
    return this.fb.group({
      key: [],
      value: []
    })
  }

 



  addBank(){
    console.log('working')
    this.addbankPage = true;

  }

  addprocessorData(){
    this.customerList.push(this.createSubItemList());
  }




  cloneAddBank(){
    this.addbankPage = false;
  }

  addproccingSubmit(){
    console.log('Working');
    this.display = Object.entries(this.addproccingForm.value.processor_data);
    console.log(this.display);
    this.display = Object.entries(this.addproccingForm.value).map((e:any) => {
      return {
       
       [e[1].key]: e[1].value,
     };
   });
   console.log(this.display);
    console.log(this.addproccingForm.value)
  }



}


