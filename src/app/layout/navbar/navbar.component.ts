import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  public dataAtual = new Date(); 

  constructor() {}

  ngOnInit(): void {  
      setInterval(() => {
          this.dataAtual = new Date();
    }, 1000); 
  }
}
