import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth-guard.service';
import { SelectiveStrategy } from './core/selective-strategy.service';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {
                path: 'products',
                canActivate: [AuthGuard],
                data: { preload: true},
                loadChildren: './main/products/product.module#ProductModule'
            },
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', component: PageNotFoundComponent}
        ], {preloadingStrategy: SelectiveStrategy})
    ],
    providers: [ SelectiveStrategy],
    exports: [RouterModule]
})

export class AppRoutingModule {}