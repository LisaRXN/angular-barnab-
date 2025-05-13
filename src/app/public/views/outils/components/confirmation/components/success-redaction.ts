import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-redaction',
  imports: [CommonModule],
  template: `
      <div
        class="w-full md:w-4/5 p-10 md:p-14 flex-1 flex flex-col gap-5 items-center justify-center font-open text-myzinc m-auto"
      >
        <h1 class="self-center font-jakarta text-xl font-bold mb-4 text-center">
          Découvrez votre annonce rédigée
        </h1>
        <img
          class="w-[100px] h-auto mb-4"
          src="assets/img/illustration/estimation-valide.png"
          alt="Estimation Immobilière"
        />
        <p class="text-lg self-center font-medium mb-4">
          Votre annonce, rédigée et prête à être publiée, vous sera envoyée par
          e-mail. Rendez-vous ensuite sur votre espace personnel pour la déposer
          en quelques clics !
        </p>
      </div>
  `,
  styles: [],
})
export class SuccessRedactionComponent {

}
