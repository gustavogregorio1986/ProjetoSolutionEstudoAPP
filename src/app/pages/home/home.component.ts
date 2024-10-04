import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  produtourl = 'https://institutoagf.com.br/wp-content/uploads/2020/09/deposito.jpg'
  produtoAlt = 'Imagem de produto'
}
