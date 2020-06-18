import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})


export class LoginPgGuardGuard implements CanActivate {
  constructor(private customerService: CustomerService, private router: Router) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const redirectUrl = next['_routerState']['url'];

      if (this.customerService.isLogged()) {
        this.router.navigate(['/dashboard']);
        return false;    

      }
  
      return true;    
    }
}
