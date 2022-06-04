import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss']
})
export class ListDriverComponent implements OnInit {

  driver= [
    {
      id:'231321221',
      name:'miguel',
      dni:'19821366',
      estatus: null
    },
    {
      id:'231321221',
      name:'miguel',
      dni:'19821366',
      estatus: null
    },
    {
      id:'231321221',
      name:'miguel',
      dni:'19821366',
      estatus: null
    },
    {
      id:'231321221',
      name:'miguel',
      dni:'19821366',
      estatus: null
    }
  ];
  tableHeaders = [
    "ID", "Nombre", "DNI", "ESTATUS"
  ]
  
  constructor() { }

  ngOnInit(): void {
    //this.listar();
    
  }

  

}
