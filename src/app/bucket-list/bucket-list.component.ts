import {Component, EventEmitter, Input, Output} from '@angular/core';
import Bucket from '../interfaces/bucket.interface';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent {
  @Input() buckets: Bucket[] = [];
  @Output() editBucketEvent = new EventEmitter<Bucket>();

  showCreateNewBucketComponent = false;

  newBucketCreated(newBucket: Bucket) {
    this.buckets.push(newBucket);
    this.showCreateNewBucketComponent = false;
  }
}
