import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploProgressbarComponent } from './components/ejemplo-progressbar/ejemplo-progressbar.component';
import { HomeComponent } from './components/home/home.component';
import {WsrpcDemoComponent} from "./components/wsrpc-demo/wsrpc-demo.component";
import { ListDriverComponent } from "./components/list-driver/list-driver.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'ejemplo-progressbar', component: EjemploProgressbarComponent
  },
  {
    path: 'wsrpc-demo', component: WsrpcDemoComponent
  },
  {
    path: 'driver', component: ListDriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
