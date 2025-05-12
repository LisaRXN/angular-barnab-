import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-estimation',
  imports: [CommonModule],
  template: `
    <div
      class="w-full md:w-4/5 p-10 md:p-14 flex-1 flex flex-col gap-5 items-center justify-center font-open text-myzinc m-auto"
    >
      <h1 class="self-center font-jakarta text-xl font-bold mb-4 text-center">
        Découvrez votre estimation
      </h1>
      <img
        class="w-[100px] h-auto"
        src="assets/img/illustration/estimation-valide.png"
        alt="Estimation Immobilière"
      />
      <p class="font-bold text-4xl text-myzinc mb-5">
        {{ midPrice | currency : 'EUR' : 'symbol' : '1.0-0' }}
      </p>
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-10"
      >
        <div class="flex flex-col gap-2 items-center justify-center">
          <p class="text-light text-mygrey text-sm">Le plus bas</p>
          <div class="flex items-center justify-center gap-3">
            <img src="assets/img/icon/low.png" class="w-5" alt="" />
            <p class="font-bold text-2xl text-myzinc">
              {{ lowPrice | currency : 'EUR' : 'symbol' : '1.0-0' }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2 items-center justify-center">
          <p class="text-light text-mygrey text-sm">Le plus haut</p>
          <div class="flex items-center justify-center gap-3">
            <img src="assets/img/icon/high.png" class="w-5" alt="" />
            <p class="font-bold text-2xl text-myzinc">
              {{ highPrice | currency : 'EUR' : 'symbol' : '1.0-0' }}
            </p>
          </div>
        </div>
      </div>
      <p class="self-center font-normal mb-4 text-justify">
        Les résultats des estimations sont fournis avec le plus grand soin par
        Barnabé, sur la base de nos algorithmes. Ils sont basés sur les
        informations que vous avez saisies et peuvent donc contenir des erreurs
        et des approximations.
      </p>
    </div>
  `,
  styles: [],
})
export class SuccessEstimationComponent {
  @Input() lowPrice: string = '';
  @Input() midPrice: string = '';
  @Input() highPrice: string = '';
}
