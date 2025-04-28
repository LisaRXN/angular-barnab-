import { Component, ElementRef, ViewChild } from '@angular/core';
import optionDetails from '../../../../../assets/data/options.json';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  url?:string;
  url2?:string;
  text?: string;
  list?: { bold: string; text: string }[];
}

interface Option {
  id: number;
  name:string;
  image: string;
  features: Feature[];
  endText?: string;
}

@Component({
  selector: 'app-option-dialog',
  imports: [CommonModule],
  templateUrl: './option-dialog.component.html',
  styleUrl: './option-dialog.component.scss',
})

export class OptionDialogComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;
  isActive = false
  options = optionDetails;
  optionVisible: Option = this.options[0]

  activeOption(){
    this.isActive = true
  }

  openModal(id:number) {
    this.modalRef.nativeElement.showModal();
    this.optionVisible = this.options.find(option => option.id === id) ?? this.options[0]
  }

  closeModal() {
    this.modalRef.nativeElement.close();
  }

  closeModalByClick(event: Event) {
    if (event.target === this.modalRef.nativeElement) {
      this.closeModal();
    }
  }

  nextOption(){
    this.optionVisible = this.options.find(option => option.id === this.optionVisible.id + 1) ?? this.optionVisible
  }

  previousOption(){
    this.optionVisible = this.options.find(option => option.id === this.optionVisible.id - 1) ?? this.optionVisible
  }
}
