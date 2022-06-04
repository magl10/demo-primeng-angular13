import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diver-form',
  templateUrl: './diver-form.component.html',
  styleUrls: ['./diver-form.component.scss']
})


export class DiverFormComponent implements OnInit {

  constructor(private router: Router) { }
  


  ngOnInit(): void {

  }

  registrar():any{
    this.router.navigate(['/driver']);

  }

}
