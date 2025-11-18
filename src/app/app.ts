import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { Escena3dComponent } from './components/escena3d/escena3d.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Servicios,
    Contacto,
    Footer,
    Escena3dComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-angular');
}
