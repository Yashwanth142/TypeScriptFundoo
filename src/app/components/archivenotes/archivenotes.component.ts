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
   
  }
  
   
}
