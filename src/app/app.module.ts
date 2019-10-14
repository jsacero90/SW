import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataSWService } from './servicios/data-sw.service';
import { ImagenesService } from './servicios/img-sw.service';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsMainComponent } from './contentsMain/contentsmain.component';
import { BodyFilmsComponent } from './body-films/body-films.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsMainComponent,
    BodyFilmsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataSWService, ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
