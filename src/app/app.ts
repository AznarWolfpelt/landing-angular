import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Asegúrate que estos imports coincidan con los nombres reales
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero'; 
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { Escena3dComponent } from './components/escena3d/escena3d.component';

@Component({
  selector: 'app-root',
  standalone: true, // ← Asegúrate que esto esté
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
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