import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService, TarefaConcluidaDirective } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar';




@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[TarefasService]
})
export class TarefasModule { }
