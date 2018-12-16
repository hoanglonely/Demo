import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { ProductModule } from './main/products/product.module';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './shared/messages/message.module';


@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
