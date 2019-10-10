import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataSWService} from './servicios/data-sw.service';
import {ImagenesService} from './servicios/img-sw.service';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsMainComponent } from './contentsMain/contentsmain.component';
import { BodyFilmsComponent } from './body-films/body-films.component';
//import { format } from 'path';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsMainComponent,
    BodyFilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataSWService, ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
