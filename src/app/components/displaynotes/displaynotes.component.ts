import { Component, Input, OnInit } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
@Input() childData:any;
  constructor(private matDialog : MatDialog) { }

  ngOnInit(): void {
  }
  DialogBox(noteData:any)
  {
    let dialogOpen = this.matDialog.open(UpdatenoteComponent,{
      data: noteData 
    });
  
    dialogOpen.afterClosed().subscribe((res:any) => {
      console.log("Dialog was closed");
    })
  }
}
