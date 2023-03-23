import {Component, EventEmitter, Output} from '@angular/core';
import Bucket from '../interfaces/bucket.interface';

@Component({
  selector: 'app-create-new-bucket',
  templateUrl: './create-new-bucket.component.html',
  styleUrls: ['./create-new-bucket.component.scss']
})
export class CreateNewBucketComponent {
  @Output() newBucketEvent = new EventEmitter<Bucket>();
  newBucket: Bucket = {
    name: "",
    location: "Ljubljana",
    files: []
  };
  locations = [
    "Ljubljana",
    "Kranj",
    "Celje",
  ]
  nameError = false;

  onSubmit() {
    this.nameError = !this.newBucket.name;
    if (!this.nameError) {
      console.log("Created a new bucket.");
      this.newBucketEvent.emit(this.newBucket);

      this.newBucket = {
        name: "",
        location: "Ljubljana",
        files: []
      };
    }
  }
}
