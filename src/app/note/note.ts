
export class Note {

  audio: HTMLAudioElement;

  constructor(private code: string,
              public name: string) {

    this.audio = new Audio(`assets/sound/${this.code}.mp3`);
  }

  play() {
    this.audio.play();
  }

  imageURL(): string {
    return `assets/image/${this.code}.png`;
  }

}

export const ALL_NOTES = [
  new Note('c-5', 'do'),
  new Note('b-4', 'si'),
  new Note('a-4', 'la'),
  new Note('g-4', 'sol'),
  new Note('f-4', 'fa'),
  new Note('e-4', 'mi'),
  new Note('d-4', 'ré'),
  new Note('c-4', 'do'),
];
