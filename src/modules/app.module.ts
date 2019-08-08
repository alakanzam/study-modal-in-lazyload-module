import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'ngx-moment';
import {SharedModule} from './shared/shared.module';
import {AppRouteModule} from './app.route';
import {AppSettings} from '../constants/app-settings.constant';
import {ResolveModule} from '../resolves/resolve.module';
import {GuardModule} from '../guards/guard.module';
import {HttpClientModule} from '@angular/common/http';

//#region Factory functions

//#endregion

//#region Module declaration

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    MomentModule,
    HttpClientModule,

    // Application modules.
    GuardModule.forRoot(),
    ResolveModule.forRoot(),
    SharedModule,
    AppRouteModule
  ],
  providers: [
    AppSettings
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}

//#endregion
