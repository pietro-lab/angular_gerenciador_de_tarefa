import { Component, OnInit } from '@angular/core';
import { TarefasService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
 //   this.tarefas = [new Tarefa(1, "tarefa 1", true), new Tarefa(1, "tarefa 2", false)];
  }


  listarTodos(): Tarefa[]{
    return this.tarefasService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('deseja remover a tarefa "' + tarefa.nome + '"?'))
    this.tarefasService.remover(tarefa.id);
    this.tarefas = this.tarefasService.listarTodos();

  }

  alterarStatus(tarefa: Tarefa): void{
    if(confirm('deseja alterar o status a tarefa "' + tarefa.nome + '"?'))
    this.tarefasService.alterarStatus(tarefa.id);
    this.tarefas = this.tarefasService.listarTodos();

  }


}
