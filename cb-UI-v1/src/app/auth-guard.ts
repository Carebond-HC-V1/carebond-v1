import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  rUrl: any;

  constructor(
    private router: Router,
    private oauthService: OAuthService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }

  canDeactivate(): boolean {
    return true;
  }

  canLoad(): boolean {
    return true;
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    console.log(url);
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    }
    return false;
  }
}
