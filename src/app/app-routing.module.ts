import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: 'about-app', component: AboutComponent},
  {path: '', redirectTo: '/board', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
