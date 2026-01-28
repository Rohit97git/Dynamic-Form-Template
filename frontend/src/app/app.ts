import { Component, signal } from '@angular/core';
import { FormComponent } from './components/form-component/form-component';

@Component({
  selector: 'app-root',
  imports: [FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
