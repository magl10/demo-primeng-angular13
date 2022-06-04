import { Component, Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-diver-form',
  templateUrl: './diver-form.component.html',
  styleUrls: ['./diver-form.component.scss']
})

@Injectable()
export class DiverFormComponent implements CanActivate {

  constructor(private router: Router) { }
  

  canActivate(): boolean {
    let currentUser:boolean= true;//string = JSON.parse(localStorage.getItem());
    
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login/login']);
      return false;
    }
  }

  ngOnInit(): void {

  }

  registrar():any{

  }

}
