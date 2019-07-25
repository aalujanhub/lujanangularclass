import { Component, OnInit } from '@angular/core';
import {ServiciomensajeService} from '../serviciomensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  dato:string;
  bandera:boolean;
  bandera2:boolean;
  bandera3:boolean;
  borrar:boolean;
  //con arreglo
  mensajes:any[];

  // con servicio
  public data:object;
 
  constructor(private srv:ServiciomensajeService) {
     this.bandera=true;
     this.bandera2=true;
     this.bandera3=false;
     this.borrar=true;
      this.mensajes=["mensaje1","mensaje2","mensaje3","mensaje4","mensaje5","mensaje6"];
   }

  ngOnInit() {
   
   }

  getvalor(){
    this.bandera=!this.bandera;
  }
  getvalor2(){
    this.bandera2=!this.bandera2;
  }
  getvalor3(){
    this.bandera3=!this.bandera3;
  }

  gettodo(){
    this.borrar=!this.borrar;
  }
//mensaje de arreglo
  getmensaje(){
       return this.dato=this.mensajes[Math.round(Math.random()*6)];
  }
  
  //mensaje de servicio
  getDetalle()
  {
    return this.srv.getDatos().subscribe(informacion =>
       { 
         this.data=informacion.author;
         this.data=informacion.quote;
      return informacion;
     } );
    
  }

}
