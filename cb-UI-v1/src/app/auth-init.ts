import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: string;
  constructor(private oauthService: OAuthService, private route: Router) {}

  authConfig: AuthConfig = {
    issuer: 'http://carebond.in:8080/realms/carebond',   
    redirectUri: "http://"+window.location.host + '/',
    postLogoutRedirectUri: "http://" + window.location.host + '/',
    clientId: 'carebond-web',
    scope: 'openid profile email',
    responseType: 'code',
    disableAtHashCheck: true,
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
    requireHttps: false,
    clearHashAfterLogin: false,
    skipIssuerCheck: true,
    oidc: true
  };

  loadConfig() {
    if (this.oauthService.hasValidAccessToken()) {
      this.token = this.oauthService.getAccessToken();
      console.log('Access Token:', this.token);
      const userInfo = this.oauthService.getIdentityClaims();
      console.log('User Info:', userInfo);
      this.redirect()
    } else {
      this.oauthService.events.subscribe(data=>{
        console.log(data);
      })
      this.oauthService.configure(this.authConfig);
      this.oauthService.setupAutomaticSilentRefresh();
      this.oauthService.loadDiscoveryDocumentAndTryLogin()
    }
  }

  redirect(): void {
    this.route.navigate(['dashboard']);
  }

  initAuth() {
      if (this.oauthService.hasValidAccessToken()) {
        this.token = this.oauthService.getAccessToken();
        console.log('Access Token:', this.token);
        const userInfo = this.oauthService.getIdentityClaims();
        console.log('User Info:', userInfo);
        this.redirect();
      } else {
        this.oauthService.initCodeFlow();  // Triggers login if not authenticated
      }
  }

  login() {
    this.initAuth();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.oauthService.hasValidIdToken());
  }

  getAccessToken(): string {
    const accessToken = this.oauthService.getAccessToken();
    return accessToken;
  }
}