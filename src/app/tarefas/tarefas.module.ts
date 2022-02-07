import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[TarefasService]
})
export class TarefasModule { }
