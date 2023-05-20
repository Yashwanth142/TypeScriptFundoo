import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashData: any;
  constructor(private note:NotesService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
   this.trashnotes()
  }
  trashnotes(){
    this.note.getallNotes().subscribe(
      (res:any) => {
        console.log(res.data);
        this.trashData=res.data
        this.trashData=this.trashData.reverse()
        this.trashData=this.trashData.filter(function(data:any){
          return data.archive ===false &&
                 data.trash === true              
        })  
    })
  }
 
}
