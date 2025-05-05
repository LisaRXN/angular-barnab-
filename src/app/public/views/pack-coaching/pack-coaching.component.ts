import { Component, ViewChild } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RouterLink } from '@angular/router';
import { PartnersDialogComponent } from '../../shared/components/partners-dialog/partners-dialog.component';
import { OptionDialogComponent } from "../../shared/components/option-dialog/option-dialog.component";
import { ReviewsComponent } from "../../shared/components/reviews/reviews.component";
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { HeroPackComponent } from '../../shared/components/hero-pack/hero-pack.component';

interface video {
  title: string;
  src: string
}

@Component({
  selector: 'app-pack-coaching',
  imports: [
    CommonModule,
    NgOptimizedImage,
    SectionTitleComponent,
    RouterLink,
    PartnersDialogComponent,
    OptionDialogComponent,
    ReviewsComponent,
    FaqComponent,
    HeroPackComponent,
],
  templateUrl: './pack-coaching.component.html',
  styleUrl: './pack-coaching.component.scss'
})
export class PackCoachingComponent {
  @ViewChild(PartnersDialogComponent) dialogComponent!: PartnersDialogComponent;
  @ViewChild(OptionDialogComponent) optionDialogComponent!: OptionDialogComponent;

  displayVideo: number = 0
  videos: video[] = [
    {
      title: "Reportage Le 20 heures TF1 & Barnabé",
      src:"barnabe-tf1.mp4"
    },
    {
      title: "Interview de Victor Plessis par <a href=\"https://www.instagram.com/envisite.podcast/\" target=\"blank\" class=\"underline\">En visite<a>, le podcast de l'immobilier résidentiel",
      src:"podcast.mov"
    },

  ]
  progressBarWidth: number = 50


  openModal() {
    if (this.dialogComponent) {
      this.dialogComponent.openModal();
    } else {
      console.error('modalComponent est undefined');
    }
  }
  openOptionDialog(id: number){
    if (this.optionDialogComponent) {
      this.optionDialogComponent.openModal(id);
    } else {
      console.error('optionDialogComponent est undefined');
    }
  }

  nextVideo() {
    if (this.progressBarWidth < 100) {
      this.displayVideo += 1;
      this.progressBarWidth += 50;
    } else {
      null;
    }
  }
  previousVideo() {
    if (this.progressBarWidth > 0) {
      this.displayVideo -= 1;
      this.progressBarWidth -= 50;
    } else {
      null;
    }
  }

}
