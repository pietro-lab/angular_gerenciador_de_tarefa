import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefasComponent } from './listar';



@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[TarefasService]
})
export class TarefasModule { }
