import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/NotesService/notes.service';
import { UserService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  firstView : boolean=true;
  NotesinData!:FormGroup;
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
      description:this.NotesinData.value.description
    };
  
  if(notesData.Title != "" && notesData.description != "")
    {
      console.log(notesData);

      this.noteServices.CreateNotes(notesData).subscribe(
        (response:any) => {
          console.log(response);
          this._snackBar.open("Notes created", "ok", { duration: 3000 });
        },
        (error:any) => {

          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        }
      );
    }else{
      this.firstView=true
    }
  }
}
