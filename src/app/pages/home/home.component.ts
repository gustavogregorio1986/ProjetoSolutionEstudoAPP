import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  produtourl = 'https://institutoagf.com.br/wp-content/uploads/2020/09/deposito.jpg'
  produtoAlt = 'Imagem de produto'
}
