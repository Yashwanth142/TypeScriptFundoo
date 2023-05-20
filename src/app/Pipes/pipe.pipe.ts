import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(value: any[],args: any) {
    //console.log(value,args)

    if(!args){
    return value;
    }
    return value.filter((note:any)=>{
      return note.Title.includes(args) || note.description.includes(args)
    })
  }

}
