import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoFoundComponent } from './no-found.component';

const routes: Routes = [
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoFoundRoutingModule { }
