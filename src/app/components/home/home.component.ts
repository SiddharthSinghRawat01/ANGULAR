import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = [{
    "id": "1",
    "brand": "Heref&Now",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/s/q/9-ultraboost-phylon-white-green-9-killer-ultraboost-white-green-original-imagt4sze4uhyenb.jpeg?q=70",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  },
  {
    "id": "2",
    "brand": "Heref&Now",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  },
  {
    "id": "3",
    "brand": "Heref&Now",
    image: "https://www.merchantmarine.co.in/cdn/shop/products/5014PCSS508M_2_600x.jpg?v=1662485390",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  },
  {
    "id": "4",
    "brand": "Heref&Now",
    image: "https://www.merchantmarine.co.in/cdn/shop/products/5018PCSS524M_2_600x.jpg?v=1662485513",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  },
  {
    "id": "5",
    "brand": "Heref&Now",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  },
  {
    "id": "6",
    "brand": "Heref&Now",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70",
    currentPrice: "150",
    standerdPrice: "300",
    discount: "50",
    name: "T-shirt"
  }]

  onViewProduct(event:any){
    console.log("onViewProduct",event);
    
  }

}
