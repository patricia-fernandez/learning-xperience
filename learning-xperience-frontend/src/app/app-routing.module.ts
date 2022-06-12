import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskboardComponent } from './taskboard/taskboard.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "taskboard"},
  {path: "taskboard", component: TaskboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
