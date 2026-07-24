import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoadingService } from './services/loading';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    AsyncPipe,
    Header
],
  templateUrl: './app.html'
})
export class App {

  constructor(
    public loadingService: LoadingService
  ) {}

}