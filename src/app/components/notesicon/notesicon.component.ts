import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/NotesService/notes.service';

@Component({
  selector: 'app-notesicon',
  templateUrl: './notesicon.component.html',
  styleUrls: ['./notesicon.component.scss']
})
export class NotesiconComponent  implements OnInit{
trash:any;
  @Input() clickReciever:any;
  @Output() ColorEvent = new EventEmitter();
  
  colorData:any = [
    {code:'#F38B83'},
    {code: '#FBBC05'},
    {code: '#FEF474'},
    {code: '#CDFF90'},
    {code: '#A6FEEB'},
    {code: '#CAF1F8'},
    {code: '#AECAFB'},
    {code: '#D7AFFA'},
    {code: '#FDCFE8'},
    {code: '#E6C8A9'},
    {code: '#FFFFFF'},
    {code: '#E9EBED'}
  ];
  constructor(private userServices:NotesService, private _snackBar:MatSnackBar) {
    
   }
   ngOnInit(): void {
    this.trash=this.clickReciever.trash;
  }
 
  ColorCodeEmit(colorInfo:any)
  {
    this.ColorEvent.emit(colorInfo);
    console.log(this.clickReciever._id)
    let data = {
      color: colorInfo,
      _id: [this.clickReciever._id]
    }   
    this.userServices.ColorChange(data).subscribe((success:any) => {
      console.log("Success", success);
      
    },
    (error:any) =>
    {
      console.log(error);  
    })
    window.location.reload();
  }

  Delete()
  {
    if(this.clickReciever.trash==false){
    console.log("in delete",this.clickReciever);
    
    let payload = {
      isDeleted:this.clickReciever.trash,
      _id:[this.clickReciever._id]
    }

    this.userServices.AddToTrash(payload).subscribe(
    (success:any)=>
    {
      this._snackBar.open("sent to trash", "ok", { duration: 3000 });
    })
  }else{
    console.log("in delete",this.clickReciever);
    
    let payload = {
      isDeleted:this.clickReciever.trash,
      _id:[this.clickReciever._id]
    }

    this.userServices.RemoveToTrash(payload).subscribe(
    (success:any)=>
    {
      this._snackBar.open("restore form trash", "ok", { duration: 3000 });
    })
  }

    this.ColorEvent.emit();
    window.location.reload();
  }
  DeleteForever()
  {
    console.log(this.clickReciever.trash)
    let payload = {
      isDeleted:false,
      _id:[this.clickReciever._id]
    }
    this.userServices.PerDelete(payload).subscribe((suc:any) => {
      console.log("Delete forever succeded", suc);    
      this._snackBar.open("Delete forever form trash", "ok", { duration: 3000 });
      
    },  
    (error:any) =>
    {
      console.log("There has been an error", error);  
    }
    );
    window.location.reload();
  }

  Archive()
  { 
    if(this.clickReciever.archive==false){
      console.log("archive true")
    let data = {
      isArchive:this.clickReciever.archive,
      _id:this.clickReciever._id
    }

    this.userServices.AddToArchive(data).subscribe(
    (success:any)=>
    {
      this._snackBar.open("sent to Archive", "ok", { duration: 3000 });
    })
  }else{
    console.log("archive false")
    let data = {
      isArchive:this.clickReciever.archive,
      _id:this.clickReciever._id
    }

    this.userServices.RemoveToArchive(data).subscribe(
    (success:any)=>
    {
      this._snackBar.open("remove form Archive", "ok", { duration: 3000 });
    })
  }

    this.ColorEvent.emit();
    window.location.reload();
  }

 
  
}
