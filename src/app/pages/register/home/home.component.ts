// Arquivo: src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa diretivas como *ngFor
import { Tarefa, TarefaService } from '../../service/tarefa.service'; // Caminho relativo correto

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  // Corrigido: aponta para os templates reais em pages/home
  templateUrl: '../../home/home.html',
  styleUrls: ['../../home/home.css']
})
export class HomeComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefas = this.tarefaService.getTarefas();
    console.log("HomeComponent: Tarefas carregadas", this.tarefas);
  }

  toggleTarefa(tarefa: Tarefa): void {
     tarefa.concluida = !tarefa.concluida;
     console.log("Tarefa alterada (visual):", tarefa);
  }
}
