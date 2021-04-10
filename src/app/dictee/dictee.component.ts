import { Component, OnInit } from '@angular/core';
import { SoundService } from '../core/sound.service';
import { ALL_NOTES, Note } from '../note/note';

@Component({
  selector: 'app-dictee',
  templateUrl: './dictee.component.html',
  styleUrls: ['./dictee.component.scss']
})
export class DicteeComponent implements OnInit {

  noteToGuess!: Note;
  score!: number;
  showSuccess = false;
  showError = false;

  constructor(private soundService: SoundService) {
  }

  ngOnInit(): void {
    this.restart();
  }

  listenToQuestion(): void {
    this.noteToGuess.play();
  }

  handleNoteSelected(note: Note): void {
    if (note === this.noteToGuess) {
      note.play();
      this.score++;
      this.showSuccess = true;
      if (this.score === 10) {
        setTimeout(() => {
          this.soundService.playSuccess();
          this.showSuccess = false;
          this.restart();
        }, 2000);
      } else {
        setTimeout(() => this.nextNoteToGuess(), 2000);
      }
    } else {
      this.soundService.playError();
      this.showError = true;
      this.restart();
      setTimeout(() => this.showError = false, 2000);
    }
  }

  private restart(): void {
    this.noteToGuess = ALL_NOTES[7]; // always start with C-4
    this.score = 0;

  }

  private nextNoteToGuess(): void {
    this.showSuccess = false;
    this.noteToGuess = ALL_NOTES[Math.floor(Math.random() * ALL_NOTES.length)];
  }
}
