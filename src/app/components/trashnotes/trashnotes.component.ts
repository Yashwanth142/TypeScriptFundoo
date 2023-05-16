import { Component,Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashData: any;
  constructor(private note:NotesService) { }

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
