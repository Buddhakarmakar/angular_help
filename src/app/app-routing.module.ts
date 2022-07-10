import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [
  {
    path:"",component:AppComponent
  }
  ,
  {
    path:"about/:id",component:AboutComponent
  },{
    path:"login",component:FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
