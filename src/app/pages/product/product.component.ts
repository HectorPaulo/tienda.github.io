import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../app.interface';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private productS = inject(ProductsService);
  private _activeRoute = inject(ActivatedRoute);
  myProduct !: product | undefined;
  constructor(){
    // console.log('Hola soy el bob el constructor');
    this._activeRoute.params.subscribe( (params:any) => {
      console.log(params.id);
      this.myProduct = this.productS.getProduct(params.id);
      console.log(this.myProduct);
    });
  }
}