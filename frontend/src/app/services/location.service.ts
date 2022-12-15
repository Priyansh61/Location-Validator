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
    // set hader and console log response
    return this.http.post(this.url + '/add', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(res => {
      console.log(res);
    });
  }


  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const json = {
          latitude: lat,
          longitude: lng
        };
        resolve(json);
      }, error => {
        reject(error);
      });
    });
  }

}

