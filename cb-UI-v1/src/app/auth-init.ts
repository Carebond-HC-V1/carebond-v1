import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {}

  authConfig: AuthConfig = {
    issuer: 'http://carebond.in:8080/realms/carebond',   
    redirectUri: 'http://localhost:4200/',
    postLogoutRedirectUri: '/',
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

  initAuth() {
    this.oauthService.events.subscribe(data=>{
      console.log(data);
      
    })
    this.oauthService.configure(this.authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.initAuth();
    this.oauthService.initCodeFlow();
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