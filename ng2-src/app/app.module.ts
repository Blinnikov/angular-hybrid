declare const angular: angular.IAngularStatic;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { UpgradeModule } from '@angular/upgrade/static';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/bundles/upgrade-static.umd.js';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['ng1app'], { strictDi: true });
  }
}

angular.module('ng1app')
  // .component('heroDetail', heroDetail)
  .directive(
    'appRoot',
    downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
  );
