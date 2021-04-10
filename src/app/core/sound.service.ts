import { Injectable } from '@angular/core';
import { Note } from '../note/note';

@Injectable({
  providedIn: 'root'
})
export class SoundService {


  errorAudio: HTMLAudioElement;
  successAudio: HTMLAudioElement;

  constructor() {
    // https://stackoverflow.com/a/54119854
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    // tslint:disable-next-line: no-unused-expression
    new AudioContextClass();

    this.errorAudio = new Audio('assets/sound/error.mp3');
    this.successAudio = new Audio('assets/sound/success.mp3');
  }

  playError(): void {
    this.errorAudio.play();
  }

  playSuccess(): void {
    this.successAudio.play();
  }

}
