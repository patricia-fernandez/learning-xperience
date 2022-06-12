import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FeatureDto } from './dto/feature.dto';

@Injectable()
export class TaskboardService {

  URL = environment.API_SERVER;

  constructor(private httpClient: HttpClient) { } 

  public getFeatures() {
    return this.httpClient.get<FeatureDto[]>(`${this.URL}/features`);
  }

  public getFeatureById(id: string) {
    return this.httpClient.get<FeatureDto>(`${this.URL}/features/${id}`);
  }

  public createFeature(feature: FeatureDto) {
    return this.httpClient.post(`${this.URL}/features/create`, feature);
  }

  public updateFeature(feature: FeatureDto){
    return this.httpClient.put(`${this.URL}/features/edit`, feature);
  }

  public deleteFeature(id: string){
    return this.httpClient.delete(`${this.URL}/features/delete/${id}`);
  }

}
