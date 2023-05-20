import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  firstView : boolean=true;
  NotesinData!:FormGroup;
  Color:any;
  @Output() message:any=new EventEmitter<any>();
  
  constructor(private formBuilder: FormBuilder , private noteServices: NotesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.NotesinData = this.formBuilder.group({
      title: "",
      description: ""
    })
  }
  SecondView()
  {
    this.firstView = false;
  }
  Close()
  {
    let notesData={
      Title:this.NotesinData.value.title,
      description:this.NotesinData.value.description,
      color:this.Color
    };
  
  if(notesData.Title != "" && notesData.description != "")
    {
      this.noteServices.CreateNotes(notesData).subscribe(
        (response:any) => {
          console.log(response);
          this.message.emit(response)       
          this._snackBar.open("Notes created", "ok", { duration: 3000 });
        },
        (error:any) => {

          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        }
        
      );
      window.location.reload();
    }else{
      this.firstView=true
    }
    
  }
  received(event:any){
   // console.log(event)
    this.Color=event
  }
 
}
