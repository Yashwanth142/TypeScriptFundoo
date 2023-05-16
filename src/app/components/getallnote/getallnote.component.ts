import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  notesData: any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes(){
    this.note.getallNotes().subscribe(
      (res:any) => {
        console.log(res.data);
        this.notesData=res.data
        this.notesData=this.notesData.reverse()
        this.notesData=this.notesData.filter(function(data:any){
          return data.archive ===false &&
                 data.trash === false              
        })  
    })
  }
  receivedMsg(event:any){
    console.log(event);
    this.getNotes()
  }
}