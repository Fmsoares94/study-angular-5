var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoopingCartService } from './shooping-cart.service';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
var ShoopingCartComponent = (function () {
    function ShoopingCartComponent(shoopingCartService) {
        this.shoopingCartService = shoopingCartService;
        this.rowState = 'ready';
    }
    ShoopingCartComponent.prototype.ngOnInit = function () {
    };
    ShoopingCartComponent.prototype.items = function () {
        return this.shoopingCartService.items;
    };
    ShoopingCartComponent.prototype.clear = function () {
        this.shoopingCartService.clear();
    };
    ShoopingCartComponent.prototype.total = function () {
        return this.shoopingCartService.total();
    };
    ShoopingCartComponent.prototype.removeItem = function (item) {
        this.shoopingCartService.removeItem(item);
    };
    ShoopingCartComponent.prototype.addItem = function (item) {
        this.shoopingCartService.addItem(item);
    };
    ShoopingCartComponent = __decorate([
        Component({
            selector: 'mt-shooping-cart',
            templateUrl: './shooping-cart.component.html',
            animations: [
                trigger('row', [
                    state('ready', style({ opacity: 1 })),
                    transition('void => ready', animate('300ms 0s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
                        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
                    ]))),
                    transition('ready => void', animate('300ms 0s ease-out', keyframes([
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
                        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
                        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [ShoopingCartService])
    ], ShoopingCartComponent);
    return ShoopingCartComponent;
}());
export { ShoopingCartComponent };
//# sourceMappingURL=shooping-cart.component.js.map