import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CallLogComponent } from './components/call-log/call-log.component';  
import { Chamada, ChamadaService } from './services/chamada.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChamadaDestaqueComponent } from './components/chamada-destaque/chamada-destaque.component';
import { ChamadaPrincipalComponent } from './components/chamada-principal/chamada-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoPlayerComponent, CallLogComponent, CommonModule, NavbarComponent, ChamadaDestaqueComponent, ChamadaPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public historicoChamadas: Chamada[] = [];
  public chamadaAtual: Chamada | undefined;
  public chamadaAtiva = false;  
  public timerId: any = null;

  constructor(private chamadaService: ChamadaService) {}

  ngOnInit(): void {
   
    this.historicoChamadas = this.chamadaService.getChamadasIniciais();
    if (this.historicoChamadas.length > 0) {
      this.chamadaAtual = this.historicoChamadas[0];
    }

    
    setInterval(() => {
      this.simularNovaChamada();
    }, 20000); 
  }

  simularNovaChamada(): void {
    
    const novaChamada = this.chamadaService.gerarNovaChamada();
    this.chamadaAtual = novaChamada;
    this.historicoChamadas = [novaChamada, ...this.historicoChamadas];
    if (this.historicoChamadas.length > 4) {
    this.historicoChamadas = this.historicoChamadas.slice(0, 4);
    }
    this.chamadaAtiva = true;

  
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    
    this.timerId = setTimeout(() => {
      this.chamadaAtiva = false;
    }, 15000); 
  }
}
