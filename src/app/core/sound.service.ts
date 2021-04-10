import { Injectable } from '@angular/core';
import { Note } from '../note/note';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }

  playNote(note: Note): void {
    this.play(note.soundURL());
  }

  playError(): void {
    this.play('assets/sound/error.mp3');
  }

  playSuccess(): void {
    this.play('assets/sound/success.mp3');
  }

  private play(soundURL: string): void {
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => audio.play());
    audio.src = soundURL;
  }
}
