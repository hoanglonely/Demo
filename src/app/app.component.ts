import { Component } from '@angular/core';
import { MessageService } from './shared/messages/message.service';
import { Router , Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  loading: boolean = false;

  constructor(private messageService: MessageService,
    private router: Router,
    private authService: AuthService){
      router.events.subscribe((routerEvent: Event) =>{
        this.checkRouterEvent(routerEvent);
      })
    }

  checkRouterEvent(routerEvent: Event): void {
    if(routerEvent instanceof NavigationStart){
      this.loading = true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError){
        this.loading = false;
      }
  }
  displayMessages(){
    this.router.navigate([{outlets: {popup: ['messages']}}]);
    this.messageService.isDisplayed = true;
  }
  hideMessages(){
    this.router.navigate([{ outlets: {popup: null}}]);
    this.messageService.isDisplayed = false;
  }
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
