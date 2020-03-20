import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, Formpopup } from './home/home.component';

import { DemoMaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CGXInformationComponent, Formpopupinner } from './cgxinformation/cgxinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    Formpopup,
    Formpopupinner,
    
    CGXInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormsModule,
  
  ],
  entryComponents: [Formpopup, Formpopupinner],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
