import {mergeMap, map, filter} from 'rxjs/operators';
import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'body',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  //#region Constructor

  public constructor(private router: Router,
                     private activatedRoute: ActivatedRoute,
                     private renderer: Renderer2) {

  }

  //#endregion

  //#region Methods

  /*
  * Called when component is being initiated.
  * */
  public ngOnInit(): void {
  }


  //#endregion
}
