import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { authGuardFunction } from './core/guards/auth.guard';
import { AuthSelectors } from './dashboard/stores/auth/auth.selectors';
import { Store } from '@ngxs/store';
import { LayoutComponent } from './public/layout/layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [
      () => !inject(Store).selectSnapshot(AuthSelectors.isLoggedIn()),
    ],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/views/login/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./public/views/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'pack-visibilite-coaching',
        loadComponent: () =>
          import('./public/views/pack-coaching/pack-coaching.component').then(
            (m) => m.PackCoachingComponent
          ),
      },
      {
        path: 'pack-visibilite-vente-interactive',
        loadComponent: () =>
          import('./public/views/pack-encheres/pack-encheres.component').then(
            (m) => m.PackEncheresComponent
          ),
      },
      {
        path: 'pack-reportage-photo-visite3D',
        loadComponent: () =>
          import('./public/views/pack-reportage/pack-reportage.component').then(
            (m) => m.PackReportageComponent
          ),
      },
      {
        path: 'estimation-immobiliere-gratuite',
        loadChildren: () =>
          import(
            './public/views/outils/outil-estimation/estimation.routes'
          ).then((m) => m.ESTIMATION_ROUTES),
      },
      {
        path: 'redaction-annonce-immobiliere',
        loadChildren: () =>
          import('./public/views/outils/outil-redaction/redaction.routes').then(
            (m) => m.REDACTION_ROUTES
          ),
      },
      {
        path: 'annonces',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./public/views/annonces/annonces.component').then(
                (m) => m.AnnoncesComponent
              ),
          },
          {
            path: ':id',
            loadComponent: () =>
              import(
                './public/views/annonce-detail/annonce-detail.component'
              ).then((m) => m.AnnonceDetailComponent),
          },
        ],
      },
      {
        path: 'guide',
        loadChildren: () =>
          import('./public/views/blog/blog.routes').then((m) => m.BLOG_ROUTES),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('./public/views/profil/profil.component').then(
            (m) => m.ProfilComponent
          ),
      },
      {
        path: 'protection-des-donnees',
        loadComponent: () =>
          import('./public/views/rgpd/rgpd.component').then(
            (m) => m.RGPDComponent
          ),
      },
      {
        path: 'conditions-generales',
        loadComponent: () =>
          import('./public/views/cgv/cgv.component').then(
            (m) => m.CGVComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [authGuardFunction],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.route').then((m) => m.DASHBOARD_ROUTES),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
