import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { LoginComponent } from './login/login.component';
import { DailyComponent } from './main/daily/daily.component';
import { LogoutComponent } from './main/logout/logout.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './main/user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'main', component:MainComponent, children:[
    {path:'daily', component:DailyComponent},
    {path:'user', component:UserComponent},
    {path:'logout', component:LogoutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
