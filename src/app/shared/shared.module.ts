import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoopingCartService } from "app/restaurant-detail/shooping-cart/shooping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurant/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent,
        RatingComponent, FormsModule,
        ReactiveFormsModule, CommonModule, SnackbarComponent]

})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoopingCartService, RestaurantsService, OrderService, NotificationService]
        }
    }
}