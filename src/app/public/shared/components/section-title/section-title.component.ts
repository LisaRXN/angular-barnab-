import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-title',
  imports: [CommonModule, RouterLink],
  templateUrl: './section-title.component.html',
})
export class SectionTitleComponent {

 @Input() title:string = ""
 @Input() nextTitle:string = ""
 @Input() subtitle:string = ""
 @Input() section:string = ""
 @Input() paragraph:string = ""
 @Input() link:string = ""
 @Input() button:string = ""

}
