import { Component,Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  archiveData: any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
   this.archivenotes()
  }
archivenotes()
{
  this.note.getallNotes().subscribe(
    (res:any) => {
      console.log(res.data);
      this.archiveData=res.data
      this.archiveData=this.archiveData.reverse()
      this.archiveData=this.archiveData.filter(function(data:any){
        return data.archive ===true &&
               data.trash === false              
      })  
     
  })
}   
}
