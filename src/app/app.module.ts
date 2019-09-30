import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataSWService} from './data-sw.service';

import { AppComponent } from './app.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataSWService],
  bootstrap: [AppComponent]
})
export class AppModule { }
