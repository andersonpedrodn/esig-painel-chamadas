import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CallLogComponent } from './components/call-log/call-log.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoPlayerComponent, CallLogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'painelChamadas';
}
