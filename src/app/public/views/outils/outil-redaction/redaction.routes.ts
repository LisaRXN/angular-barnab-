import { Routes } from '@angular/router';

export const REDACTION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./outil-redaction.component').then(
        (m) => m.OutilRedactionComponent
      ),
  },
  {
    path: 'address',
    loadComponent: () =>
      import('../components/address/address.component').then(
        (m) => m.AddressComponent
      ),
    data: { service: 'redaction' },
  },
  {
    path: 'estateType',
    loadComponent: () =>
      import('../components/estate-type/estate-type.component').then(
        (m) => m.EstateTypeComponent
      ),
    data: { service: 'redaction' },
  },
  {
    path: 'characteristics',
    loadComponent: () =>
      import('../components/characteristics/characteristics.component').then(
        (m) => m.CharacteristicsComponent
      ),
      data: { service: 'redaction' },

  },
  {
    path: 'advantages',
    loadComponent: () =>
      import('../components/advantages/advantages.component').then(
        (m) => m.AdvantagesComponent
      ),
      data: { service: 'redaction' },

  },
  {
    path: 'identity',
    loadComponent: () =>
      import('../components/identity/identity.component').then(
        (m) => m.IdentityComponent
      ),
      data: { service: 'redaction' },
  },
  {
    path: 'confirmation',
    loadComponent: () =>
      import('../components/confirmation/confirmation.component').then(
        (m) => m.ConfirmationComponent
      ),
    data: { service: 'redaction' },
  },
  { path: '**', redirectTo: '' },
];
