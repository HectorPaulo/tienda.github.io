import { Injectable } from '@angular/core';
import { product } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  productos:product[] = [
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: true,
      id: 1,
    },
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: false,
      id: 2
    },
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: true,
      id: 3
    },
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: true,
      id: 4
    },
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: false,
      id: 5
    },
    {
      category: 'Electronica',
      image: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22331c7bc/mouse-usb-para-gamers-2000-2900-4400-dpi.jpg',
      name: 'Mouse Gamer',
      price: 450,
      state: false,
      id: 6
    },
  ];
  getProductos(){
    return this.productos;
  }
  getProduct(id: number): product | undefined {
    const ID = Number(id);
    return this.productos.find(p => p.id === ID);
  }


}