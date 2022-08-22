import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NotificationService } from 'src/app/service/notification.service';
import {BankmasterService} from '../../../../service/bankmaster.service';


@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.scss'],
  providers:[BankmasterService]
})
export class BanklistComponent implements OnInit {

  addbankPage: boolean = false;
  bankDetailsList :any;

  bankinfoForm: FormGroup;

  p: number = 1;
  total: number = 0;
  filterTerm: string;
  loading: boolean = false;
  addbank: boolean = false;
  updatebank: boolean = false;

  bankId = new Subject();
  IdBank:any;


  constructor(
    private bankService: BankmasterService,
    private fb: FormBuilder,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {

    /*********function call */
    this.getAllBankList();

    this.setValidateBank();

    this.bankId.subscribe(
      (res) => {
        console.log(res);
        this.IdBank = res;
      }
    )

  }

  setValidateBank(){
    this.bankinfoForm = this.fb.group({
      bank_name: new FormControl('', Validators.required),
      bank_code: new FormControl('', Validators.required),
      status: new FormControl(1)
    })
  }

  addBank(){

    this.addbankPage = true;
    this.addbank = true;
    this.updatebank = false;
    (document.getElementById('popup1') as HTMLFormElement).style.display = "block";

  }

  addBankInfo(){
    console.log('Working');
    console.log(this.bankinfoForm.value)
    this.bankService.postBankList(this.bankinfoForm.value)
    .subscribe(
      (res) =>{
        console.log(res);
        this.bankinfoForm.reset();
        this.addbankPage = false;
        this.notification.showSuccess('','Bank Data Add Successfully');
        this.getAllBankList();
      }
    )
  }

  cloneAddBank(){
    this.addbankPage = false;
    (document.getElementById('popup1') as HTMLFormElement).style.display = "none";
  }

  getAllBankList(){
    this.bankService.getBankList()
    .subscribe(
      (res) =>{
        // console.log(res);
        this.bankDetailsList = res;
      }
    )
  }

  pageChangeEvent(event: number){
    this.p = event;
  
  
  }

  editbankdata(item:any){
    // console.log(item);
    let Id= item.bank_id;
    this.bankId.next(Id);

    this.addbankPage = true;
    this.bankService.getOneBank(item.bank_id)
    .subscribe(
      (res) => {
        console.log(res);
        this.bankinfoForm.patchValue(res);
        this.updatebank= true;
        this.addbank = false;
      }
    )
  }

  UpdateBankInfo(){
    this.bankService.putBankDetails(this.IdBank, this.bankinfoForm.value)
    .subscribe(
      (res) => {
        console.log(res);
        this.notification.showSuccess('','Update Sucessfully'),
        this.bankinfoForm.reset();
        this.addbankPage = false;
        this.getAllBankList();
      }
    )
  }
  

}
