import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { FormulariodeCompraComponent } from './componentes/formulariode-compra/formulariode-compra.component';

const routes: Routes = [

  {path:'inicio', component:InicioComponent},
  {path:'novedades', component:NovedadesComponent},  
  {path:'formcompra', component:FormulariodeCompraComponent},  

  {path:'**', pathMatch:'full', redirectTo: 'inicio'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
