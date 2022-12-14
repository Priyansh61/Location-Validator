import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = environment.uri;

  constructor(private http: HttpClient) { }

  addLocation(data: any) {
    return this.http.post(`${this.url}/add`, data).subscribe((res: any) => {
      console.log(res);
    });
  }


}

