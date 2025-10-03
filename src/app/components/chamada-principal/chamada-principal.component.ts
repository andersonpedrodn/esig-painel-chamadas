import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chamada } from '../../services/chamada.service';

@Component({
  selector: 'app-chamada-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chamada-principal.component.html',
  styleUrl: './chamada-principal.component.scss'
})
export class ChamadaPrincipalComponent {
  @Input() chamada: Chamada | undefined;
}
