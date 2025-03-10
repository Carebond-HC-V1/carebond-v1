// app.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit{
  popupMessage: any;
  showPopup: boolean = false;
  
  public decodedAccesssToken: string | undefined;
  public decodedIDDToken: string | undefined;
  public isLoggedin = false;
  constructor(private http: HttpClient, private router: Router,
    private readonly oauthService: AuthService) {
  }
  ngOnInit(): void {
    this.isLoggedin = !!this.oauthService.getAccessToken(); 
    if(this.isLoggedin) {
      this.router.navigate(["/dashboard"])
    } else {
      this.oauthService.loadConfig();
    }
  }

  login(): void {
    this.oauthService.login();
    setTimeout(() => {
      this.isLoggedin = !!this.oauthService.getAccessToken(); 
    }, 3000);
  }

  corporate(): void {
    console.log("clicked");
    this.router.navigate(['/corporate']);
  }

  LogOut(): void {
    this.oauthService.logout();
  }

  home (): void {
    this.router.navigate(['/home']);
  }
}
