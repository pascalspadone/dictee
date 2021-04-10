
export class Note {

  constructor(private code: string,
              public name: string) { }

  soundURL(): string {
    return `assets/sound/${this.code}.mp3`;
  }

  imageURL(): string {
    return `assets/image/${this.code}.png`;
  }

}

export const ALL_NOTES = [
  new Note('c-4', 'do'),
  new Note('d-4', 'ré'),
  new Note('e-4', 'mi'),
  new Note('f-4', 'fa'),
  new Note('g-4', 'sol'),
  new Note('a-4', 'la'),
  new Note('b-4', 'si'),
  new Note('c-5', 'do'),
];
