import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tools-navigation',
  imports: [],
  templateUrl: './tools-navigation.component.html',
  styleUrl: './tools-navigation.component.scss',
})
export class ToolsNavigationComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @Input() form!: FormGroup;
  @Input() step!: number;

  tools: string = '';

  navigation = [
    { step: 1, link: 'address' },
    { step: 2, link: 'estateType' },
    { step: 3, link: 'characteristics' },
    { step: 4, link: 'advantages' },
    { step: 5, link: 'identity' },
    { step: 6, link: 'confirmation' },
  ];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tools = data['service'];
    });
  }

  previousStep() {
    const previousLink =
      this.navigation.find((item) => item.step === this.step - 1)?.link || '';
    this.tools === 'redaction'
      ? this.router.navigate([`/redaction-annonce-immobiliere/${previousLink}`])
      : this.router.navigate([
          `/estimation-immobiliere-gratuite/${previousLink}`,
        ]);
  }
  nextStep() {
    if (this.form.invalid) {
      console.log('invalid');
      this.form.markAllAsTouched();
      return;
    } else {
      console.log('next page');
      const nextLink =
        this.navigation.find((item) => item.step === this.step + 1)?.link || '';
      this.tools === 'redaction'
        ? this.router.navigate([`/redaction-annonce-immobiliere/${nextLink}`])
        : this.router.navigate([
            `/estimation-immobiliere-gratuite/${nextLink}`,
          ]);
    }
  }
}
