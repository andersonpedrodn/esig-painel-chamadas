import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CallLogComponent } from './components/call-log/call-log.component';
import { Chamada, ChamadaService } from './services/chamada.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChamadaDestaqueComponent } from './components/chamada-destaque/chamada-destaque.component';
import { ChamadaPrincipalComponent } from './components/chamada-principal/chamada-principal.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VideoPlayerComponent,
    CallLogComponent,
    CommonModule,
    NavbarComponent,
    ChamadaDestaqueComponent,
    ChamadaPrincipalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate('600ms ease-in', style({ opacity: 1 })), 
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 })), 
      ]),
    ]),
  ],
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
    }, 25000);
  }

  simularNovaChamada(): void {
    const novaChamada = this.chamadaService.gerarNovaChamada();
    this.chamadaAtual = novaChamada;
    this.historicoChamadas = [novaChamada, ...this.historicoChamadas];

    const avisoSonoro = new Audio('/assets/audio/ding.mp3');
    avisoSonoro.play();
    setTimeout(() => {
      avisoSonoro.play();
    }, 3000);

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
