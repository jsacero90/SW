import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataSWService} from './servicios/data-sw.service';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataSWService],
  bootstrap: [AppComponent]
})
export class AppModule { }
