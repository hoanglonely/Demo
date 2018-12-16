import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{
    constructor(private authService: AuthService,
        private router: Router){}
    //Kiểm tra,Bảo vệ người dùng có thể tru cập đến router hay ko?
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log('In canActive ' + state.url);
        return this.checkLoggedIn(state.url);
    }
    //Kiểm tra bảo vệ người dùng có thể truy cập dến router child hay ko
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log('In canActiveChild: '+ state.url);
        return this.checkLoggedIn(state.url);
    }
    //Kiểm tra nếu ng dùng thoát khỏi router
    canLoad(route: Route): boolean{
        console.log('In Load ' +route.path);
        return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean{
        //Đăng nhập thành công
        if(this.authService.isLoggedIn()){
            return true;
        }
        //Ko chịu đăng nhập,Giữ lại url đang cố gắng chuyển hướng
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}