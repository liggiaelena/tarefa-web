import { Component } from '@angular/core';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Lavar a louça', concluida: false },
    { descricao: 'Varrer a casa', concluida: true },
    { descricao: 'Limpar meu quarto', concluida: false },
    { descricao: 'Lavar o banheiro', concluida: true },
    { descricao: 'Secar os pratos', concluida: false }
  ];

  toggleConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
