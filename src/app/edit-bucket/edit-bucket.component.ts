import {Component, EventEmitter, Input, Output} from '@angular/core';
import Bucket from '../interfaces/bucket.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-bucket',
  templateUrl: './edit-bucket.component.html',
  styleUrls: ['./edit-bucket.component.scss']
})
export class EditBucketComponent {
  @Input() bucket!: Bucket;
  @Output() deleteBucketEvent = new EventEmitter<Bucket>();
  activeTab = 1;
  constructor(private modalService: NgbModal) {}

  onFileSelected(event: any) {
    const file = event?.target?.files[0];

    if (file) {
      this.bucket.files.push(
        {
          name: file.name,
          lastModifiedDate: file.lastModifiedDate.toLocaleDateString("en-US"),
          size: file.size
        }
      )
    }
  }

  open(content: any) {
    this.modalService.open(content).result.then(
      (result) => {
        if (result === "delete") {
          console.log(result);
          this.deleteBucketEvent.emit(this.bucket);
        }
      },
    );
  }
}
