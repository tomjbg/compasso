import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Token } from "./login/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public token: string;
  public user: any;

  constructor(private route: Router) { }

  canActivate(activeRoute: ActivatedRouteSnapshot, stateRoute: RouterStateSnapshot): boolean {

    if (!this.tokenValid()) {
      this.route.navigate(['/login']);
      return false;
    }

    return true;
  }

  tokenValid(): boolean {

    this.token = localStorage.getItem('comp.token');

    const jwtService = new JwtHelperService();

    if (!this.token || jwtService.isTokenExpired(this.token)) {
      return false;
    }
    return true;
  }

}




// import { Injectable } from "@angular/core";
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

// @Injectable()
// export class AuthService implements CanActivate {
//     public token: string;
//     public user;

//     constructor(private router: Router) { }

//     canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         this.token = localStorage.getItem('eio.token');
//         this.user = JSON.parse(localStorage.getItem('eio.user'));

//         if (!this.token) {
//             this.router.navigate(['/entrar'])
//             return false;
//         }

//         let claim: any = routeAc.data[0];
//         if (claim !== undefined) {
//             let claim = routeAc.data[0]['claim'];

//             if (claim) {
//                 if (!this.user.claims) {
//                     this.router.navigate(['/acesso-negado']);
//                     return false;
//                 }

//                 let userClaims = this.user.claims.some(x => x.type === claim.nome && x.value === claim.valor);
//                 if (!userClaims) {
//                     this.router.navigate(['/acesso-negado']);
//                     return false;
//                 }
//             }
//         }

//         return true;
//     }
// }
