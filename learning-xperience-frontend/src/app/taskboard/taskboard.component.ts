import { Component, OnInit } from '@angular/core';
import { FeatureDto } from './dto/feature.dto';
import { TaskboardService } from './taskboard.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  displayedColumns  :  string[] = ['title', 'description', 'status', 'actions'];
  dataSource: FeatureDto[] = [];
  feature: FeatureDto;
    
  constructor(private taskboardService: TaskboardService) {
    this.feature = new FeatureDto();
  }

  ngOnInit(): void {
    this.getFeatures();
  }

  selectFeature(feature: FeatureDto){
    this.feature = feature;
  }

  getFeatures() {
    this.dataSource = [];
    this.feature = new FeatureDto();
    this.taskboardService.getFeatures().subscribe((result) => {   
      this.dataSource  =  result;
    })
  }

  createFeature(data: any){
    this.taskboardService.createFeature(data.value).subscribe((result)=>{
      console.log(result);
      this.getFeatures();
    });
  }

  deleteFeature(id: string){
    this.taskboardService.deleteFeature(id).subscribe((result)=>{
      console.log(result);
      this.getFeatures();
    });
  }

  updateFeature(data: any){
    data.value.featureId = this.feature['featureId'];
    this.taskboardService.updateFeature(data.value).subscribe((result)=>{
      console.log(result);
      this.getFeatures();
    });
  }

}
