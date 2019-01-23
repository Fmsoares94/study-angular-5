import { Component, OnInit } from '@angular/core';
import { ShoopingCartService } from './shooping-cart.service';

@Component({
  selector: 'mt-shooping-cart',
  templateUrl: './shooping-cart.component.html'
})
export class ShoopingCartComponent implements OnInit {

  constructor(private shoopingCartService: ShoopingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.shoopingCartService.items
  }

  clear() {
    this.shoopingCartService.clear()
  }

  total(): number {
    return this.shoopingCartService.total()
  }

  removeItem(item: any) {
    this.shoopingCartService.removeItem(item)
  }

  addItem(item: any) {
    this.shoopingCartService.addItem(item)
  }

}
