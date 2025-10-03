import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chamada } from '../../services/chamada.service';

@Component({
  selector: 'app-chamada-destaque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chamada-destaque.component.html',
  styleUrl: './chamada-destaque.component.scss'
})
export class ChamadaDestaqueComponent {
  @Input() chamada: Chamada | undefined;
}
