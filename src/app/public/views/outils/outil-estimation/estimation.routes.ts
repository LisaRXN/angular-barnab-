import { Routes } from '@angular/router';

export const ESTIMATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./outil-estimation.component').then(
        (m) => m.OutilEstimationComponent
      ),
      data: { service: 'estimation' },
  },
  {
    path: 'address',
    loadComponent: () =>
      import('../components/address/address.component').then(
        (m) => m.AddressComponent
      ),
      data: { service: 'estimation' },

  },
  {
    path: 'estateType',
    loadComponent: () =>
      import('../components/estate-type/estate-type.component').then(
        (m) => m.EstateTypeComponent
      ),
      data: { service: 'estimation' },
  },
  {
    path: 'characteristics',
    loadComponent: () =>
      import('../components/characteristics/characteristics.component').then(
        (m) => m.CharacteristicsComponent
      ),
    data: { service: 'estimation' },
  },
  {
    path: 'advantages',
    loadComponent: () =>
      import('../components/advantages/advantages.component').then(
        (m) => m.AdvantagesComponent
      ),
    data: { service: 'estimation' },
  },
  {
    path: 'identity',
    loadComponent: () =>
      import('../components/identity/identity.component').then(
        (m) => m.IdentityComponent
      ),
    data: { service: 'estimation' },
  },
  {
    path: 'confirmation',
    loadComponent: () =>
      import('../components/confirmation/confirmation.component').then(
        (m) => m.ConfirmationComponent
      ),
    data: { service: 'estimation' },
  },
  { path: '**', redirectTo: '' },
];
