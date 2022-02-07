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
    this.tarefas = [new Tarefa(1, "tarefa 1", true), new Tarefa(1, "tarefa 2", false)];
  }


  listarTodos(): Tarefa[]{
    return this.tarefasService.listarTodos();
  }


}
