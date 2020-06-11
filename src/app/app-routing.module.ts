import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing based on the components that were created
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component'


const routes: Routes = [
  // each route gets its own object in the array
  // empty string means that within each router, the component that has a path that is empty will load first
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
