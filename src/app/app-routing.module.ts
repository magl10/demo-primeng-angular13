import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploProgressbarComponent } from './components/ejemplo-progressbar/ejemplo-progressbar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent    
  }, 
  { 
    path: 'ejemplo-progressbar', component: EjemploProgressbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
