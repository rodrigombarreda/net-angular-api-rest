import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  { path: '', component: LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent}
  ];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
  
})


export class AppRoutingModule { }


