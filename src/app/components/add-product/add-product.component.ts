import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product: Product = {
    name: "",
    brand: "",
    image: "",
    currentPrice: 0,
    standerdPrice: 0,
    discount: 0
  }

toastrService = inject(ToastrService);
router = new Router
  productService = inject(ProductService)
  addProduct() {
    console.log("form submited", this.product);
    this.productService.addProduct(this.product).subscribe(result=>{
      this.toastrService.success("Product Saved")
      this.router.navigateByUrl("/")
    })
  }


}
