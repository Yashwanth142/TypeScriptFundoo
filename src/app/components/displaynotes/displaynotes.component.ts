import { Component, Input, OnInit } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import { DatashareService } from 'src/app/services/datashare/datashare.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class DisplaynotesComponent implements OnInit {
@Input() childData:any;
searchText:any;
color:any;

  constructor(private dataservice:DatashareService,private matDialog : MatDialog) { }

  ngOnInit(): void {  
    this.getdatafromDashboard()
  }
  getdatafromDashboard(){
    this.dataservice.currentdata.subscribe((res:any)=>{
      this.searchText=res
    })
  }
  received(event:any){
    // console.log(event)
    this.color=event
   }
  DialogBox(noteData:any)
  {
      let dialogOpen = this.matDialog.open(UpdatenoteComponent,{
      data: noteData,  
  });
  
  dialogOpen.afterClosed().subscribe((res:any) => {
     console.log("Dialog was closed");
   })
  }
}
