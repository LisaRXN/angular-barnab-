import { CanActivateFn, Router } from '@angular/router';
import { PropertyToolsService } from '../services/property-tools.service';
import { inject } from '@angular/core';

export const toolsFormCompleteGuard: CanActivateFn = (route, state) => {

  const toolsService = inject(PropertyToolsService);
  const router = inject(Router);
  const tool = route.data['service'];

  if (toolsService.isFormValid()) {
    return true;
  } else {
    let redirectUrl = '/';
    if (tool === 'estimation') {
      redirectUrl = '/estimation-immobiliere-gratuite/address';
    } else if (tool === 'redaction') {
      redirectUrl = '/redaction-annonce-immobiliere/address';
    }

    return router.parseUrl(redirectUrl);
}
}
