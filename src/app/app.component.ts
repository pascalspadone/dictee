import { Component } from '@angular/core';
import { ALL_NOTES, Note } from './dictee/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dictee';
  allNotes = ALL_NOTES;

  constructor() {
  }

  playSound(): void {
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => audio.play());
    audio.src = 'assets/sound/c-4.mp3';
  }

  handleNoteClicked(note: Note): void {
    note.play();
    console.log(`clicked ${note.name}`);
  }
}
