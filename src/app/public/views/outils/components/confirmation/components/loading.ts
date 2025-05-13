import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  template: `
      <div
        class="w-full md:w-4/5 p-10 md:p-14 flex-1 flex flex-col gap-5 items-center justify-center font-open text-myzinc min-h-[400px] m-auto"
      >
        <h1 class="self-center font-jakarta text-xl font-bold mb-4 text-center">
          Ça arrive bientôt
        </h1>
        <span class="loading loading-dots loading-3xl text-myorange"></span>
        <p class="text-lg self-center font-medium mb-4">
          On y est presque ! Votre {{ displayTool }} est en cours...
        </p>
      </div>
  `,
  styles: [],
})
export class LoadingComponent {

    @Input() displayTool: string = '';

}
