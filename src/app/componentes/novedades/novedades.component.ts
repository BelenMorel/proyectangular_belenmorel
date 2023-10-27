import { Component } from '@angular/core';
import { Novedad } from 'src/app/modelos/novedad';
import { Novedades } from 'src/app/modelos/novedades';
import { InfoPageService } from 'src/app/servicios/info-page.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
  
})
export class NovedadesComponent {

  
  infoNovedades?: Novedades;
  listaNovedades:Novedad[]=[];
imagen: any;
urlImagen: any;
  constructor(private novedadesService: InfoPageService){}

  ngOnInit():void {
    this.novedadesService.obtenerDatos().subscribe((data: any ) => {
      this.infoNovedades=data;
      this.listaNovedades=data.Novedades;
      console.log(data);
    })
  }

  
}
