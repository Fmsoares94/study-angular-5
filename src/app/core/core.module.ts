import { NgModule } from "@angular/core";
import { ShoopingCartService } from "app/restaurant-detail/shooping-cart/shooping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurant/restaurants.service";
import { OrderService } from "app/order/order.service";


@NgModule({
    providers: [ShoopingCartService, RestaurantsService, OrderService]
})
export class CoreModule { }