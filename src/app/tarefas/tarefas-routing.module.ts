import { Routes } from "@angular/router";

import { ListarTarefasComponent } from ".";

export const tarefasRoutes :Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path:'tarefas/listar',
        component: ListarTarefasComponent
    }
];