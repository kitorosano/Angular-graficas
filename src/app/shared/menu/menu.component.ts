import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { ruta: '/graficas/barras', nombre: 'Barras' },
    { ruta: '/graficas/barras-doble', nombre: 'Barras Doble' },
    { ruta: '/graficas/dona', nombre: 'Dona' },
    { ruta: '/graficas/dona-http', nombre: 'Dona Http' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
