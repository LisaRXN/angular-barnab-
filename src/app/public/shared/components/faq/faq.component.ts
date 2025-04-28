import { Component, Input } from '@angular/core';
import faqHomeDetails from '../../../../../assets/data/faq-home.json';
import { CommonModule } from '@angular/common';

interface FaqItem {
  id: number;
  question: string;
  reponse: string;
  liste?:string[]
}
@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input() faq:FaqItem[] = faqHomeDetails;
}
