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
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {WebsocketRpcStatsComponent} from "./components/websocket-rpc-stats/websocket-rpc-stats.component";
import {RatingModule} from 'primeng/rating';
import { ListDriverComponent } from './components/list-driver/list-driver.component';
import { DiverFormComponent } from './components/divers/diver-form/diver-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploProgressbarComponent,
    WsrpcDemoComponent,
    WebsocketRpcStatsComponent,
    ListDriverComponent,
    DiverFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    TableModule,
    InputTextModule,
    FormsModule,
    RatingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
