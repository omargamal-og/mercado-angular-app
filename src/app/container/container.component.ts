import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { searchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent ,searchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
  // name: string = "Omar Gamal";
  // addToCart: number = 0;
  // product = {
  //   name: "iPhone",
  //   price: 1225,
  //   color: "Blue",
  //   discount: 8.5,
  //   inStock: 7,
  //   pImage: "imgs/iphone.jpg"
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }

  // onNameChange(event: any) {
  //   // this.name = event.target.value;
  // }

  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }

  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
}
