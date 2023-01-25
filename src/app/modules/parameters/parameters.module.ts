import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CrearMarcaComponent } from './brand/crear-marca/crear-marca.component';
import { EditarMarcaComponent } from './brand/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './brand/eliminar-marca/eliminar-marca.component';
import { ListarMarcaComponent } from './brand/listar-marca/listar-marca.component';
import { CrearCategoriaComponent } from './category/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './category/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './category/listar-categoria/listar-categoria.component';
import { EliminarCategoriaComponent } from './category/eliminar-categoria/eliminar-categoria.component';
import { CrearProductoComponent } from './product/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './product/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './product/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './product/eliminar-producto/eliminar-producto.component';
import { FotografiaProductoComponent } from './product/fotografia-producto/fotografia-producto.component';


@NgModule({
  declarations: [
    CrearMarcaComponent,
    EditarMarcaComponent,
    EliminarMarcaComponent,
    ListarMarcaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    EliminarCategoriaComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    FotografiaProductoComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
