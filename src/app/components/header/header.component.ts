import { Component, OnDestroy,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DatashareService } from 'src/app/services/datashare/datashare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private dataservice:DatashareService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  searchNote(event:any){
    console.log(event.target.value)
    this.dataservice.sendData(event.target.value)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
