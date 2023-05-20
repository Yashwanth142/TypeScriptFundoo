import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { ArchivenotesComponent } from './components/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:'notes',component:GetallnoteComponent,canActivate:[AuthenticationGuard]},
      {path:'archive',component:ArchivenotesComponent},
      {path:'trash',component:TrashnotesComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
