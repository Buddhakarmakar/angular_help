import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './forms/forms.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './about/about.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
