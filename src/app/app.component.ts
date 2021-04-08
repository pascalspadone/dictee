import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dictee';

  playSound(): void {
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => audio.play());
    audio.src = 'assets/sound/c-4.mp3';
  }
}
