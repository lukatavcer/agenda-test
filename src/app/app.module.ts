import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {BucketListComponent} from './bucket-list/bucket-list.component';
import {CreateNewBucketComponent} from './create-new-bucket/create-new-bucket.component';
import { EditBucketComponent } from './edit-bucket/edit-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateNewBucketComponent,
    BucketListComponent,
    EditBucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
