import { Routes } from '@angular/router';

export const ESTIMATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./outil-estimation.component').then(
        (m) => m.OutilEstimationComponent
      ),
  },
  {
    path: 'address',
    loadComponent: () =>
      import('../components/address/address.component').then(
        (m) => m.AddressComponent
      ),
  },
  {
    path: 'estateType',
    loadComponent: () =>
      import('../components/estate-type/estate-type.component').then(
        (m) => m.EstateTypeComponent
      ),
  },
  {
    path: 'characteristics',
    loadComponent: () =>
      import('../components/characteristics/characteristics.component').then(
        (m) => m.CharacteristicsComponent
      ),
  },
  {
    path: 'advantages',
    loadComponent: () =>
      import('../components/advantages/advantages.component').then(
        (m) => m.AdvantagesComponent
      ),
  },
  {
    path: 'identity',
    loadComponent: () =>
      import('../components/identity/identity.component').then(
        (m) => m.IdentityComponent
      ),
  },
  {
    path: 'confirmation',
    loadComponent: () =>
      import('../components/confirmation/confirmation.component').then(
        (m) => m.ConfirmationComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
