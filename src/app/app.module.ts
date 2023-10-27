import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RouterModule, Routes } from '@angular/router';
import { FormulariodeCompraComponent } from './componentes/formulariode-compra/formulariode-compra.component';
import { formatCurrency } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiepaginaComponent,
    InicioComponent,
    NovedadesComponent,
    ServiciosComponent,
    FormulariodeCompraComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
