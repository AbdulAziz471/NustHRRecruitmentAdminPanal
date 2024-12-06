import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  canExit: () => boolean;
}
export const canDeactivateGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
    return component.canExit ? component.canExit() : true;
 
};