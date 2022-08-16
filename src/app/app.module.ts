import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {ThirdComponent} from './third/third.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { GymComponent } from './gym/gym.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'first', component: FirstComponent},
  {path: 'third', component: ThirdComponent},
];

@NgModule({


  declarations:
    [
      AppComponent,
      FirstComponent,
      ThirdComponent,
      HomeComponent,
      GymComponent,
    ],
  imports:
    [RouterModule.forRoot(appRoutes),
      BrowserModule
    ],
  providers:
    [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
