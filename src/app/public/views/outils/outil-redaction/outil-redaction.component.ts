import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroPackComponent } from '../../../shared/components/hero-pack/hero-pack.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-outil-redaction',
  imports: [CommonModule, HeroPackComponent, RouterLink],
  templateUrl: './outil-redaction.component.html',
})
export class OutilRedactionComponent {

}
