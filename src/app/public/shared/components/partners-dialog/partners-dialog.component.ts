import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import {MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import partnersDetails from '../../../../../assets/data/partners.json'
import { CommonModule } from '@angular/common';

interface Partner {
  id:number,
  name:string,
  image:string,
  web:string,
  alt:string,
}

type PartnerVisibility = "pack-coaching" | "pack-encheres" | "all";


@Component({
  selector: 'app-partners-dialog',
  imports: [CommonModule],
  templateUrl: './partners-dialog.component.html',
  styleUrl: './partners-dialog.component.scss'
})
export class PartnersDialogComponent {

  @Input() partnerVisibility: PartnerVisibility = "all";

  partners:Partner[] = partnersDetails

  getVisiblePartners(){
    if(this.partnerVisibility === "pack-coaching" ) return this.partners.filter(partner => ![2, 3, 4, 5, 8].includes(partner.id));
    if(this.partnerVisibility === "pack-encheres" ) return this.partners.filter(partner => ![2, 8].includes(partner.id));
    else return this.partners
  }


  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;

  openModal() {
    this.modalRef.nativeElement.showModal();
  }

  closeModal() {
    this.modalRef.nativeElement.close();
  }

  closeModalByClick(event: Event) {
    if (event.target === this.modalRef.nativeElement) {
    this.closeModal();
    }
  }


}
