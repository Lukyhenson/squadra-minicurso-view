import { Routes } from '@angular/router';

import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { VisualizarClienteComponent } from './visualizar-cliente/visualizar-cliente.component';

export const ClienteRoutes: Routes = [
    {
        path: 'cliente/incluir',
        component: IncluirClienteComponent
    },
    {
        path: 'cliente/:id/alterar',
        component: AlterarClienteComponent
    },
    {
        path: 'cliente/:id/visualizar',
        component: VisualizarClienteComponent
    },
    {
        path: 'cliente/listar',
        component: ListarClienteComponent
    },
    {
        path: 'cliente',
        redirectTo: '/cliente/listar'
    }
];