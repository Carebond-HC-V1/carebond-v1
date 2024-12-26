// app.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  popupMessage: any;
  showPopup: boolean = false;
  
  public decodedAccesssToken: string | undefined;
  public decodedIDDToken: string | undefined;
  constructor(private http: HttpClient, private router: Router,
    private readonly oauthService: AuthService) {
  }

  login(): void {
    this.oauthService.login();
  }

  corporate(): void {
    console.log("clicked");
    this.router.navigate(['/corporate']);
  }

  home (): void {
    this.router.navigate(['/']);

  }
}
