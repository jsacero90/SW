
import {APP_BASE_HREF} from '@angular/common';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsMainComponent } from './contentsMain/contentsmain.component';
import { BodyFilmsComponent } from './body-films/body-films.component';


const routes: Routes = [
  {path: 'home', component: ContentsMainComponent },
  {path: 'films', component: BodyFilmsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes )]
})
export class AppRoutingModule { }
