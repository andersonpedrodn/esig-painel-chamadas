import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent implements OnInit {
  @Input() isMuted: boolean = false;

  public safeVideoUrl: SafeResourceUrl | undefined;

  // public  videoId: string = 'WdxYgjjPSjg';
  public  playlistId: string = 'PLzPNL90VUZTmoFLDAv3jgnch9bApsY6TP';

  constructor (private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  const baseUrl = 'https://www.youtube.com/embed/videoseries';

  // Crie uma lista (array) com todos os parâmetros
  const params = [
    'autoplay=1',
    // 'loop=1', //Loop comentado porque coloquei o REQ_08 de playlist.
    `list=${this.playlistId}`, // Use a playlist em vez de um único vídeo
    'controls=1',
    this.isMuted ? 'mute=1' : 'mute=0' // Adiciona o parâmetro de mudo corretamente
  ];

  // Junte todos os parâmetros com '&' e adicione o '?' no início
  const finalUrl = `${baseUrl}?${params.join('&')}`;

  // "Limpe" a URL para que o Angular a considere segura
  this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
}
}
