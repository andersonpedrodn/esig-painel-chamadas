import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chamada } from '../../services/chamada.service';

@Component({
  selector: 'app-call-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-log.component.html',
  styleUrl: './call-log.component.scss'
})
export class CallLogComponent {
@Input() historico: Chamada[] = [];

constructor() { }
}
