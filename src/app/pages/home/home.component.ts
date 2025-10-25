// Arquivo: src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa, TarefaService } from '../service/tarefa.service'; // Confirmação: ../service (singular)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  // Variável para guardar a lista de tarefas que virá do serviço
  tarefas: Tarefa[] = [];

  // 1. Pede ao Angular para te dar uma instância do TarefaService
  constructor(private tarefaService: TarefaService) {}

  // 2. Quando o componente é iniciado...
  ngOnInit(): void {
    this.carregarTarefas(); // ...chama a função para buscar as tarefas
  }

  // 3. Função que usa o serviço para pegar as tarefas
  carregarTarefas(): void {
    this.tarefas = this.tarefaService.getTarefas();
    console.log("HomeComponent: Tarefas carregadas", this.tarefas); // Para depuração
  }

  // 4. Função para marcar/desmarcar (só visual por enquanto)
  toggleTarefa(tarefa: Tarefa): void {
     tarefa.concluida = !tarefa.concluida;
     console.log("Tarefa alterada (visual):", tarefa);
     // No futuro: this.tarefaService.atualizarTarefa(tarefa);
  }
}
