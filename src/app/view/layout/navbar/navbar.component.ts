import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
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

}
