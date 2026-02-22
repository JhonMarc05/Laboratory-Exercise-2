import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})


export class Products {
  
  Products = [
    { name: 'Wireless Headphones', price: 2499 , image: '/wireless.png',description: 'High quality sound with Bluetooth support.', stock : 0  },
    { name: 'Gaming Headset', price: 1999 , image: '/gaming.jpg',description: 'Comfortable headset with clear microphone.', stock : 5 },
    { name: 'Noise Cancelling', price: 3299 , image: 'nosecancel.jpg',description: 'Block outside noise for better focus.', stock : 4 }
  ];



  addToCart(item: any) {
    if (item.stock > 0) {
      item.stock--;
    }
  }

}
