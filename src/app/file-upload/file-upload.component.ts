import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  file: File;
  fileName: string;

  //oh yeah
  constructor(private storage: AngularFireStorage) {
  }

  // Set the file locally (file input change)
  setFile(event) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  // Change File Name (text input change)
  rename(event) {
    this.fileName = event.target.value;
  }

  // Upload to firestorage
  upload() {
    const task = this.storage.upload(this.fileName, this.file);
    // Once upload is down, release memory
    task.then(_ => {
      delete this.file;
      delete this.fileName;
    });
  }

  uploadFile(event) {
    const file: File = event.target.files[0];
    const filePath = file.name; // const filePath = file.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }
   
}