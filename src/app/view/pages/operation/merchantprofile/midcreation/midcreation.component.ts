import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import {MerchantprofileService} from '../../../../../service/merchantprofile.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenstorageService} from '../../../../../service/tokenstorage.service';

@Component({
  selector: 'app-midcreation',
  templateUrl: './midcreation.component.html',
  styleUrls: ['./midcreation.component.scss']
})
export class MidcreationComponent implements OnInit {


  midcreationForm: FormGroup;
  mid!: number;
  midData:any;
  elenght: any;
  obje2:any = [];



  constructor(
    private merchantService: MerchantprofileService,
    private fb: FormBuilder,
    private tokenStorage:TokenstorageService,
    private notification:NotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    this.mid = this.route.snapshot.params['id'];
    console.log(this.mid)
      /**************MID Creation Form */
      this.setMidCreationForm();

      this.getmidCreation();
  }

  
  /*********************
   * ser MID Creation Form 
   */
   setMidCreationForm(){
    this.midcreationForm = this.fb.group({
      pricing_data: this.fb.array([this.processnmetho()]),
     
    })
  }

  pricingDATAMID(): FormArray{
    return this.midcreationForm.get('pricing_data') as FormArray;
  }

  processnmetho(){
    return this.fb.group({
      payment_processor_id: new FormControl(''),
      processor_method_id: new FormControl(''),
      payment_processor_name: [],
      processor_method_name:[],
      api_fields: this.fb.array([this.createSubItemList()])
    })

    
  }

  createSubItemList(){
   
    return this.fb.group({
      value:''
    })
  }



  employeeSkills(i: number): FormArray {
    return this.pricingDATAMID()
      .at(i)
      .get('api_fields') as FormArray;
  }

  newApiFields(): FormGroup{
    return this.fb.group({
      value:[]
    })
  }

  
   /**************************
    * MID Creation GET
    */
    getmidCreation(){
   
      this.merchantService.getMIDCreation(this.mid)
      .subscribe(
        (res) =>{
          console.log(res);
     
     
          this.midData = res;  
         
          const control = <FormArray>this.midcreationForm.controls['pricing_data'];
         
          console.log(control)
          if(this.elenght < control.length){
            console.log('asdsada')
          }else{
            console.log('hi');

           
          
          
            res.forEach((element:any, i:any) => {
              console.log(element.api_fields[0]);
            
              this.obje2 = element.api_fields[0];
              control.push(this.processnmetho())

           
              var result = Object.entries(element.api_fields[0]);
              console.log(result)
              for(var k = 0; k < result.length; k++) {
                for(var z = 0; z < result[k].length; z++) {
                    // document.write(result[i][z] + " ");
                    console.log(result[k][z] + " ")
                   
                }
                // document.write("</br>");
            }
            
            });
            control.patchValue(res);
          
          }
          // this.employeeSkills().push(this.createSubItemList());
          // control.push(this.createSubItemList())
       
        }
      )
  
     }
  



  
  onSUbmitMidCreateion(){

  }      


}
