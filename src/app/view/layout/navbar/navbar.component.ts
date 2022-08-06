import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TokenstorageService } from 'src/app/service/tokenstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: any;
  $m_last_name:any;
  $m_email:any;
  $m_id:any;


  
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private tokenService: TokenstorageService
  ) { }

  ngOnInit(): void {

    this.getUserInfo();

  }

   /**
   * Sidebar toggle on hamburger button click
   */
    toggleSidebar(e: Event) {
      e.preventDefault();
      console.log('Working')
      console.log(this.document.body)
      this.document.body.classList.toggle('sidebar-open');
    }

   /**
   * Logout
   */
    onLogout(e: Event) {
      e.preventDefault();
      localStorage.removeItem('loggedInUserFin');
  
      if (!localStorage.getItem('loggedInUserFin')) {
        this.router.navigate(['/auth/login']);
        // localStorage.removeItem('loggedInUser');
        // localStorage.removeItem('apikey');
        console.clear();
      }
    }

    getUserInfo(){
      const userData = this.tokenService.getToken();
  
    let usernameInfo = JSON.parse(userData || '{}');
    // console.log(usernameInfo.Data)
    /***merchant name */
    let usernameA = usernameInfo.Data.first_name;
    this.username = usernameA
    let user_lastname =usernameInfo.Data.last_name;
    this.$m_last_name = user_lastname;
    /****merchant id */
    let mercahnt_id = usernameInfo.Data.merchant_id;
    this.$m_id = mercahnt_id;
    /***merchant email */
    let m_email = usernameInfo.Data.email;
    this.$m_email = m_email;
    }

}
