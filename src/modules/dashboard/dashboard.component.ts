import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HelloModalComponent} from './hello-modal/hello-modal.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {

  public constructor(protected modalService: NgbModal) {

  }

  public clickDisplayModal(): void {
    this.modalService.open(HelloModalComponent);
  }
}
