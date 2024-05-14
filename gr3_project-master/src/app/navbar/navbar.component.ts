import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet , NavigationStart} from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navBg:string = '';
  navFontColor:string = '';
  navOpacity:string = '';
  logoinvert = '';
  // für Hamburger:
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  slCloseMenu(){
    jQuery(".menu").click();
  }

  constructor(private router: Router) {}

  ngOnInit() {
    
    this.router.events.subscribe((event) =>  {  
      if (event instanceof NavigationStart) {
        if(event.url === "/contact"){
          this.navBg = '#fff';
          this.navFontColor = '#000';
          this.navOpacity = '1';
          this.logoinvert = '0';
        }
        else if(event.url === '/testimonials'){
          this.navOpacity = '1';
          this.navBg = 'rgba(0,0,0,1)';
          this.navFontColor = '#fff';
          this.logoinvert = '1';
        }
        else if(event.url === '/about'){
          this.navOpacity = '1';
          this.navBg = 'rgba(0,0,0,1)';
          this.navFontColor = '#fff';
          this.logoinvert = '1';
        }
        else{
          this.navBg = 'rgba(0,0,0,1)';
          this.navFontColor = '#fff';
          this.navOpacity = '.5';
          this.logoinvert = '1';
        }
      }
    });
  }

}