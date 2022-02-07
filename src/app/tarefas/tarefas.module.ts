import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[TarefasService]
})
export class TarefasModule { }
