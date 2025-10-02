import { Injectable } from '@angular/core';

export interface Chamada {
  senha: string;
  nome: string;
  guiche: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChamadaService {
  private mockChamadas: Chamada[] = [
    { senha: 'CG-001N', nome: 'João Hebert C Geral', guiche: '1' },
    { senha: 'CG-002N', nome: 'Maria Souza', guiche: '2' },
    { senha: 'CG-003N', nome: 'Carlos Pereira', guiche: '1' },
    { senha: 'CG-001P', nome: 'Ana Costa', guiche: '3' },
    { senha: 'CG-004N', nome: 'Pedro Lima', guiche: '2' },
    { senha: 'CG-005N', nome: 'Lucas Fernandes', guiche: '1' },
    { senha: 'CG-006N', nome: 'Mariana Rocha', guiche: '3' },
    { senha: 'CG-007N', nome: 'Rafael Alves', guiche: '2' },
    { senha: 'CG-008N', nome: 'Beatriz Martins', guiche: '1' },
    { senha: 'CG-009N', nome: 'Felipe Gomes', guiche: '3' },
  ];
  private contadorSenhas = 10;

  constructor() {}

  getChamadas(): Chamada[] {
    return this.mockChamadas.slice(0, 4);
  }

  novasChamadas(): Chamada {
    const indiceAleatorio = Math.floor(Math.random() * this.mockChamadas.length);
    const paciente = this.mockChamadas[indiceAleatorio];

    this.contadorSenhas++;
    const novaSenha = `${paciente.senha.charAt(0)}${String(this.contadorSenhas).padStart(3, '0')}`;
  
    return {
      senha: novaSenha,
      nome: paciente.nome,
      guiche: paciente.guiche,
    };
  }
}