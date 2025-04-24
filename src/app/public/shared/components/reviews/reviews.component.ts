import { Component } from '@angular/core';
import userReviewsDetails from '../../../../../assets/data/user-reviews.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  userReviews = userReviewsDetails;
  visibleUserReview = 0;
  progressBarWidth = 20;

  nextReview() {
    if (this.progressBarWidth < 100) {
      this.visibleUserReview += 1;
      this.progressBarWidth += 20;
    } else {
      null;
    }
  }
  previousReview() {
    if (this.progressBarWidth > 0) {
      this.visibleUserReview -= 1;
      this.progressBarWidth -= 20;
    } else {
      null;
    }
  }

}
