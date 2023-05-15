import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { NotesiconComponent } from './components/notesicon/notesicon.component';
import { ArchivenotesComponent } from './components/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    CreatenoteComponent,
    GetallnoteComponent,
    NotesiconComponent,
    ArchivenotesComponent,
    TrashnotesComponent,
    DisplaynotesComponent,
    UpdatenoteComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    MatToolbarModule,MatSidenavModule,MatSnackBarModule,MatListModule,
    MatMenuModule,MatNativeDateModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
