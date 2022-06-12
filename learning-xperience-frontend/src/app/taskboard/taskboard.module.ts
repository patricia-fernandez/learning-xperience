import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskboardComponent } from './taskboard.component';
import { TaskboardService } from './taskboard.service';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [TaskboardComponent],
  imports: [CommonModule, AppModule],
  providers: [TaskboardService]
})
export class TaskboardModule { }
