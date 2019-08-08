import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MomentModule} from 'ngx-moment';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../factories/ngx-translate.factory';
import {HttpClient} from '@angular/common/http';

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
  ],
  exports: [
    TranslateModule
  ]
})

export class SharedModule {

  public constructor(translateService: TranslateService) {
    translateService.use('en-US');
  }
}

//#endregion
