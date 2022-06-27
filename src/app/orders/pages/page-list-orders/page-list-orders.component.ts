import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public collection$: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'orders list';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'type',
      'client',
      'nbjours',
      'tjm HT',
      'total HT',
      'total TTC',
      'state',
    ];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }
}
