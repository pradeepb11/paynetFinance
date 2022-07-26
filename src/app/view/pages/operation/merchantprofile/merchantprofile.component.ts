import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantprofile',
  templateUrl: './merchantprofile.component.html',
  styleUrls: ['./merchantprofile.component.scss']
})
export class MerchantprofileComponent implements OnInit {

  defaultNavActiveId = 1;
  defaultNavCode: any;
  horizontalAlignmentCenterCode: any;
  horizontalCenterCode: any;
  horizontalEndCode: any;
  verticalNavCode: any;
  fillJustifyNavCode: any;
  navWidthDropdownCode: any;
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
