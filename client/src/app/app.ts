import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App implements OnInit {
  private api = inject(ApiService);
  checkMessage = signal<string>('');
  ngOnInit(): void {
    this.checkServer();
  }
  checkServer() {
    this.api.checkServer().subscribe((res: any) => {
      this.checkMessage.set(res);
    });
  }
}
