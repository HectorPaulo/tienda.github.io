import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../Components/card-product/card-product.component';
import { product } from '../../app.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // styleUrls en lugar de styleUrl
})
export class HomeComponent {
  productos: product[] = [];
  private _productS = inject(ProductsService);
  constructor(){
    this.productos = this._productS.getProductos();
  }
}
