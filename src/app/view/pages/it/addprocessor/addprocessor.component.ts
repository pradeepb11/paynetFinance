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
  myFormValueChanges$:any;
  display: any;
  empForm: FormGroup;


  
  cards = [{ name: "Credit Card",value:'CC' }, { name: "Debit Card", value:'DC' }, { name: "Net banking", value:'NB' }, { name: 'Third Party', value:'TP' },{name: 'Pay Out', value:'PO'}]



  constructor(
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {

  this.setValidateAddprocessor();
 
 


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

  processor_data(): FormArray{
    
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

  employeeSkills(i: number): FormArray {
    return this.processor_data()
      .at(i)
      .get('api_fields') as FormArray;
  }

  removeprocessorData(i:any){
    this.processor_data().removeAt(i)
  }

  addprocessor_data(){
    this.processor_data().push(this.createItemFeild())
  }

  addapi_fields(i:any){
    this.employeeSkills(i).push(this.createSubItemList())
  }


 



 



  addBank(){
    console.log('working')
    this.addbankPage = true;

  }




  cloneAddBank(){
    this.addbankPage = false;
  }

  addproccingSubmit(){
    console.log('Working');
 
    this.display = Object.entries(this.addproccingForm.value.processor_data).map((e:any) => {
      console.log(e[1].api_fields[0])
      
      return {
       
       [e[1].api_fields[0].key]: e[1].api_fields[0].value,
     };
   });
   console.log(this.display);
   this.display.push(this.addproccingForm.value);
 

    console.log(this.addproccingForm.value)
  }



}


