import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefasService } from '..';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa

  constructor(private tarefasService: TarefasService, private route: ActivatedRoute, private  router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefasService.buscarPorId(id);
  }

  atualizar(): void{
    if(this.formTarefa.valid){
      this.tarefasService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas'])
    }
  }

}
