import { Component } from '@angular/core';
import { Header } from './components/shared/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
