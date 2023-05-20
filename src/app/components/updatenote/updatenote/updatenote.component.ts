import { Component, OnInit,Inject  } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/NotesService/notes.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  noteTitle : any;
  noteDescription : any;
  noteId : any;
  noteColor:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private matDialogRef: MatDialogRef<UpdatenoteComponent>, private notesService : NotesService) { }

  ngOnInit(): void {
    this.noteTitle = this.data.Title;
    this.noteDescription = this.data.description;
    this.noteId = this.data._id;
    this.noteColor=this.data.color
  }
  receivedcolor(event:any){
    // console.log(event)
    this.noteColor=event
   }

  Dataupdate()
  {
    if(this.data.title != this.noteTitle || this.data.description != this.noteDescription)
    {
      let updatedData = {
        Title: this.noteTitle,
        description: this.noteDescription,
        _id: this.noteId,
        color:this.noteColor
      }
      //console.log(updatedData);

      this.notesService.UpdateNotes(updatedData).subscribe((res:any) => {console.log("Note updated", res);})   
    }
    this.matDialogRef.close(); 
    window.location.reload();
  }

}
