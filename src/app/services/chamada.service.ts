import { Injectable } from '@angular/core';


export interface Chamada {
  senha: string;
  nome: string;
  guiche: string;
  hora: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ChamadaService {
  private mockNomes: Omit<Chamada, 'senha' | 'hora'>[] = [
    { nome: 'CARLOS PEREIRA', guiche: '02' },
    { nome: 'ANA LIMA', guiche: '04' },
    { nome: 'JOSÉ SANTOS', guiche: '01' },
    { nome: 'MARIA SILVA', guiche: '03' },
    { nome: 'PEDRO ALVES', guiche: '05' },
  ];
  private contadorDeSenhas = 3; 
  private prefixos = ['CG', 'P', 'N']; 

  constructor() { }

  
  getChamadasIniciais(): Chamada[] {
    return [
      { senha: 'CG-003N', nome: 'CARLOS PEREIRA', guiche: '01', hora: '15:40' },
      { senha: 'CG-002N', nome: 'MARIA SOUZA', guiche: '02', hora: '15:39' },
      { senha: 'CG-001N', nome: 'JOÃO HEBERT C GERAL', guiche: '1', hora: '15:38' },
    ];
  }


  gerarNovaChamada(): Chamada {
    this.contadorDeSenhas++;

    
    const prefixo = this.prefixos[this.contadorDeSenhas % this.prefixos.length];
    const novaSenha = `${prefixo}-${String(this.contadorDeSenhas).padStart(3, '0')}N`;

    const paciente = this.mockNomes[Math.floor(Math.random() * this.mockNomes.length)];

    const horaAtual = new Date();
    const horaFormatada = `${horaAtual.getHours()}:${String(horaAtual.getMinutes()).padStart(2, '0')}`;

    return {
      senha: novaSenha,
      nome: paciente.nome,
      guiche: paciente.guiche,
      hora: horaFormatada 
    };
  }
}