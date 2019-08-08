import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {HelloModalComponent} from './hello-modal/hello-modal.component';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModalModule
  ],
  declarations: [
    DashboardComponent,
    HelloModalComponent
  ],
  exports: [RouterModule],
  entryComponents: [
    HelloModalComponent
  ]
})
export class DashboardRouteModule {
}

//#endregion
