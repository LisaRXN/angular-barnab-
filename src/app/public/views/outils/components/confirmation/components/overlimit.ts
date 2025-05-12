import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlimit',
  imports: [CommonModule],
  template: `

<div
        class="w-full md:w-4/5 p-10 md:p-14 flex-1 flex flex-col gap-5 items-center justify-center font-open text-myzinc min-h-[400px] m-auto"
      >
        <h1 class="self-center font-jakarta text-xl font-bold mb-4 text-center">
          Connexion à votre Espace Personnel
        </h1>
        <img
          class="w-[80px] h-auto mb-4"
          src="assets/img/illustration/estimation-valide.png"
          alt=""
        />
        <p class="text-lg self-center font-medium mb-4">
          Vous avez déjà effectué une {{ displayTool }}. Accédez à votre
          <a
            href="https://app.barnabe-immo.fr/"
            target="_blank"
            rel="external"
            class="underline"
            >Espace Personnel</a
          >
          pour la consulter ou en créer une nouvelle.
        </p>
      </div>

  `,
  styles: [],
})
export class OverlimitComponent {
  @Input() displayTool: string = '';
}
