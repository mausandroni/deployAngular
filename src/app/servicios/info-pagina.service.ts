import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class InfoPaginaService {
info: InfoPagina = {};
cargada: boolean = false;

public equipo: any[] = [];

  constructor(private http: HttpClient) { 
    console.log('Servicio de info-pagina listo');

    this.cargarInfo();
    this.cargarEquipo();

    //Leer el archivo JSon, para ello importo en el app module el httpClienteModule
this. http.get('assets/data/data-pagina.json')
.subscribe((resp: InfoPagina) => {
  console.log(resp);


  //como ya es un objeto de Javascript, puedo acceder a sus propiedades
  console.log(resp.email);
  console.log(resp.nombre);

  
  //Luego de las pruebas, utilizo la variable resp para guardar la informacion
  this.cargada = true;
  this.info = resp;
  console.log(resp);

  });
  }

private cargarInfo(){

  this. http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
        console.log(resp);
        this.cargada = true;
        this.info = resp;
  });

}

private cargarEquipo(){

  this. http.get('https://appecommerce-3298e-default-rtdb.firebaseio.com/equipo.json')
  .subscribe((resp: any) => {
    this.equipo = resp;
    console.log(resp);
    });
}

  }