import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroPackComponent } from '../../../shared/components/hero-pack/hero-pack.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-outil-estimation',
  imports: [CommonModule, HeroPackComponent, RouterLink],
  templateUrl: './outil-estimation.component.html',
})
export class OutilEstimationComponent {

}
