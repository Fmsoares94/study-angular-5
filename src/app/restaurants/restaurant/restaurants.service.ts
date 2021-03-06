import { IRestaurant } from "./restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { ErrorHandler } from "../../app-error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu.item.model";
@Injectable()

export class RestaurantsService {

    constructor(private http: HttpClient) { }


    restaurants(search?: string): Observable<IRestaurant[]> {
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().append('q', search)
        }
        return this.http.get<IRestaurant[]>(`${MEAT_API}/restaurants`, { params: params })
    }

    restaurantById(id: string): Observable<IRestaurant> {
        return this.http.get<IRestaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}