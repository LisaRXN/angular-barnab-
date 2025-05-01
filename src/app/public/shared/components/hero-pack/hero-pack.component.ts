import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-pack',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero-pack.component.html',
  styleUrl: './hero-pack.component.scss'
})
export class HeroPackComponent {

  @Input() overtitle!: string
  @Input() titleOne!: string;
  @Input() titleTwo!: string;
  @Input() subtitle!: string;
  @Input() bgColor : string = "bg-myblue"
  @Input() textColor : string = "text-white"
  @Input() borderColor: string = "border-white"
  @Input() image!: string;

}
