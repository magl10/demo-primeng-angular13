import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EjemploProgressbarComponent } from './components/ejemplo-progressbar/ejemplo-progressbar.component';

import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import {MessageService} from 'primeng/api';
import { WsrpcDemoComponent } from './components/wsrpc-demo/wsrpc-demo.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploProgressbarComponent,
    WsrpcDemoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        ProgressBarModule,
        ToastModule,
        TableModule
    ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
