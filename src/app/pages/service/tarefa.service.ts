// Arquivo: src/app/services/tarefa.service.ts
import { Injectable } from '@angular/core';

// 1. Define como uma tarefa deve ser (Interface)
export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root' // Faz o Angular encontrar este serviço automaticamente
})
export class TarefaService {

  // 2. Cria uma lista de tarefas de exemplo (Mock Data)
  private mockTarefas: Tarefa[] = [
    { id: 1, titulo: 'Configurar o projeto Angular', concluida: true },
    { id: 2, titulo: 'Criar componente de Login', concluida: true },
    { id: 3, titulo: 'Criar componente de Registro', concluida: true },
    { id: 4, titulo: 'Criar componente Home', concluida: false },
    { id: 5, titulo: 'Implementar TarefaService com mocks', concluida: false },
    { id: 6, titulo: 'Listar tarefas na Home', concluida: false },
    { id: 7, titulo: 'Fazer o relatório do trabalho', concluida: false }
  ];

  constructor() { }

  // 3. Cria uma função para "buscar" as tarefas
  getTarefas(): Tarefa[] {
    console.log("TarefaService: Buscando tarefas..."); // Para depuração
    // Retorna uma cópia da lista original
    return [...this.mockTarefas];
  }

  // Você pode adicionar mais funções aqui depois (adicionar, remover, etc.)
}
