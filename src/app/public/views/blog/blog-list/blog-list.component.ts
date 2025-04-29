import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PrerenderService } from '../../../../core/services/prerender.service';
import { combineLatest, fromEvent, map, Subscription, switchMap } from 'rxjs';
import { ArticleCardComponent } from '../components/article-card/article-card.component';
import { ArticleGateway } from '../../../../core/ports/article.gateway';
import { environment } from '../../../../../environments/environment';
import { Article, Type } from '../../../../core/models/article.models';

interface Subtitle {
  id:number;
  subtitle:string;
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleCardComponent, NgOptimizedImage],
  templateUrl: './blog-list.component.html',
  styles: [
    `
      .blog-list-container {
        padding: 2rem;
      }
    `,
  ],
})
export class BlogListComponent implements OnInit {
  articles: Article[] = [];
  type!: Type;
  env = environment;

  constructor(
    private route: ActivatedRoute,
    private articleGateway: ArticleGateway
  ) {}

  subtitles: Subtitle[] = [
    {
      id:1, subtitle:"Les dernières tendances, conseils et analyses du marché"
    },
    {
      id:2, subtitle:"Les plateformes et professionnels qui façonnent le marché"
    },
    {
      id:3, subtitle:"Les dernières actualités sur l'immobilier"
    },
  ]

  getSubtitle(id:number) {
    return this.subtitles.find( _ => Object.keys(id) )?.subtitle || ""
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          const slug = params['slug'];
          const id = this.articleGateway.getIdCategory(slug);
          return combineLatest([
            this.articleGateway.getArticlesByType(id),
            this.articleGateway
              .getArticleTypes()
              .pipe(map((types) => types.filter((type) => type.id === id))),
          ]);
        })
      )
      .subscribe({
        next: ([articles, type]) => {
          this.articles = articles;
          this.type = type[0];
        },
        error: (error) => console.error('Erreur:', error),
      });
  }
}
