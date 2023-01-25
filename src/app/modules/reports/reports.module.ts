import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ProductosPorMarcaComponent } from './productos-por-marca/productos-por-marca.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { ListadoClientesPorCiudadComponent } from './listado-clientes-por-ciudad/listado-clientes-por-ciudad.component';



@NgModule({
  declarations: [
  
    ProductosPorMarcaComponent,
       BusquedaAvanzadaComponent,
       ListadoClientesPorCiudadComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
