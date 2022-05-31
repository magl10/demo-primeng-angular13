import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ejemplo-progressbar',
  templateUrl: './ejemplo-progressbar.component.html',
  styleUrls: ['./ejemplo-progressbar.component.scss']
})
export class EjemploProgressbarComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  value = 0;

  ngOnInit(): void {
  }

  agregarAlProgressBar() {
    this.value += 10;

    this.messageService.add({
      severity:'success', 
      summary:'ProgressBar Ejemplo', 
      detail:'Ahora el progressbar tiene como valor: ' + this.value
    });
  }

  quitarAlProgressBar() {
    this.value -= 10;

    this.messageService.add({
      severity:'error', 
      summary:'ProgressBar Ejemplo', 
      detail:'Ahora el progressbar tiene como valor: ' + this.value
    });
  }

}
