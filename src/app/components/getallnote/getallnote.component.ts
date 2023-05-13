import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getnotes()
  }
  getnotes(){
    this.note.getallNotes().subscribe(
      (reslove)=>console.log(reslove)
    )
  }

}
