import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
    
     estudoUrl = 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/04/saiba-como-elaborar-um-cronograma-de-estudos-infalc3advel.png?resize=1000'
     estudoAlt = 'estudo da imagem'
}
