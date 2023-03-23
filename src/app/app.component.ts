import { Component } from '@angular/core';
import Bucket from './interfaces/bucket.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agenda-test';
  isEditingBucket = false;
  editingBucket: Bucket | undefined = undefined;
  buckets: Bucket[] = [
    {
      "name": "BestStorage",
      "location": "Kranj",
      "files": []
    },
    {
      "name": "Pics",
      "location": "Ljubljana",
      "files": []
    }
  ];

  editBucket(bucket: Bucket) {
    this.editingBucket = bucket;
    this.isEditingBucket = true;
  }

  deleteBucket(bucket: Bucket) {
    this.editingBucket = undefined;
    const bucketIndex = this.buckets.indexOf(bucket);
    if(bucketIndex !== -1) {
      this.buckets.splice(bucketIndex, 1);
    }
    this.isEditingBucket = false;
  }
}
