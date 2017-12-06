import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { VisualizarClienteComponent } from './visualizar-cliente/visualizar-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [IncluirClienteComponent, AlterarClienteComponent, VisualizarClienteComponent, ListarClienteComponent]
})
export class ClienteModule { }
