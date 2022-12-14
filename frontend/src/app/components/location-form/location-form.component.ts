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

}
