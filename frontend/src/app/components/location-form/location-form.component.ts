import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {

  displayedColumns: string[] = ['location', 'radius'];

  locationForm: any = FormBuilder;
  locations: any;
  data : any = {
    display_name: '',
    radius: '',
    longitude: '',
    latitude: ''
  };

  tableData: any;

  displayTable: boolean = false;

  isValidateEnabled: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private locationService: LocationService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      location: [null, [Validators.required]],
      radius: [null, [Validators.required]],
    })
    this.locationForm.get('location').valueChanges.subscribe((value: any) => {
      this.getLocation(value);
    });
  }

  getLocation(query: string) {
    this.http.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`)
      .subscribe(data => {
        this.locations = data;
      });
  }

  selectedLocation(location: any) {
    this.data.longitude = location.lon;
    this.data.latitude = location.lat;
  }

  toggleValidate() {
    this.isValidateEnabled = true;
  }

  handleAdd() {
    console.log("handleAdd");
    this.data.display_name = this.locationForm.get('location').value;
    this.data.radius = this.locationForm.get('radius').value;
    this.locationService.addLocation(this.data);
    this.displayTable = true;
    this.tableData = new MatTableDataSource([this.data]);
  }

  async handleValidate() {
    const currentLocation  = await this.locationService.getCurrentLocation();
    // Lets find the distance between current location and the location in the table

    const distance = this.haversineDistance(currentLocation, this.data);
    if (distance <= this.data.radius) {
      alert("You are within the radius");
    }
    else {
      alert("You are outside the radius");
    }
  }

  haversineDistance(coords1:any, coords2:any) {
    const earthRadius = 6371; // radius of the Earth in kilometers
    const lat1 = coords1.latitude * (Math.PI / 180);
    const lat2 = coords2.latitude * (Math.PI / 180);
    const lon1 = coords1.longitude * (Math.PI / 180);
    const lon2 = coords2.longitude * (Math.PI / 180);
  
    const a = Math.pow(Math.sin((lat2 - lat1) / 2), 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.pow(Math.sin((lon2 - lon1) / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return earthRadius * c;
  }
  


}
