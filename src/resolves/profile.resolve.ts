import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class ProfileResolve implements Resolve<any> {

  //#region Constructors

  /*
  * Initialize resolve with injectors.
  * */
  public constructor() {

  }

  //#endregion

  //#region Methods

  /*
  * Resolve route data.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of({});
  }

  //#endregion

}
