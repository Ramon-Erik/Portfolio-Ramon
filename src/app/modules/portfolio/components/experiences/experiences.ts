import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-experiences',
  imports: [MatExpansionModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class ExperiencesCopmponent {
  public experiences = signal([
    {
      title: 'Estágio em Desenvolvimento Web na  Ótica Fênix',
      description: 'Maracanaú | Agosto de 2024 - Dezembro de 2024',
      text: '<p>Durante meu estágio, atuei na criação de páginas informativas, garantindo acessibilidade e responsividade nos sites da Ótiac Fênix. Utilizei WordPress e JavaScript para desenvolver soluções que melhoraram a experiência do usuário e a presença digital da empresa.</p><p>Além disso, fui responsável pela manutenção e aprimoramento de páginas já existentes, otimizando desempenho e funcionalidades. Essa experiência me permitiu consolidar conhecimentos em desenvolvimento front-end e trabalhar com demandas reais, alinhando técnicas modernas às necessidades do negócio.</p>',
    },
  ]);
}
