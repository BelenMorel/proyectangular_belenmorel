import { Component } from '@angular/core';
import { Novedad } from 'src/app/modelos/novedad';
import { Novedades } from 'src/app/modelos/novedades';
import { InfoPageService } from 'src/app/servicios/info-page.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  infoNovedades?: Novedades;
  listaNovedades:Novedad[]=[];
  constructor(private novedadesService: InfoPageService){}

  ngOnit():void {
    this.novedadesService.obtenerDatos().subscribe((data: any ) => {
      this.infoNovedades=data;
      this.listaNovedades=data.Novedades;
      console.log(data);
    })
  }

  

}
