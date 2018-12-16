import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable()

export class SelectiveStrategy implements PreloadingStrategy{
    preload(route: Route, load: Function): Observable<any> {
        if(route.data && route.data['preload']){
            return load();
        }
        return of(null);
    }
}