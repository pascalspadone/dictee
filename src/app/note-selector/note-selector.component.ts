import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ALL_NOTES, Note } from '../note/note';

@Component({
  selector: 'app-note-selector',
  templateUrl: './note-selector.component.html',
  styleUrls: ['./note-selector.component.scss']
})
export class NoteSelectorComponent implements OnInit {

  @Output() noteSelected = new EventEmitter<Note>();

  allNotes = ALL_NOTES;

  constructor() { }

  ngOnInit(): void {
  }

  handleNoteClicked(note: Note): void {
    this.noteSelected.emit(note);
    console.log(`clicked ${note.name}`);
  }

}
