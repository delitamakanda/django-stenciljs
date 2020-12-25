import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorHandlerService } from '../../../../shared/error-handler.service';
import { FileInformation } from '../../../../models';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss']
})
export class NewPhotoComponent implements OnInit, OnDestroy, ErrorStateMatcher {

  postPhotoUserSub: Subscription;
  userPhotoErrors: any;
  updated: boolean;
  profilForm: FormGroup;
  file: File;
  fileInformation: FileInformation;
  @ViewChild('fileInput', { static: true })
  public fileInput: ElementRef;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder,
    private errorService: ErrorHandlerService,
    public dialogRef: MatDialogRef<NewPhotoComponent>
  ) { }

  ngOnInit() {
    this.profilForm = this.fb.group({
      linkField: [''],
      fileField: [''],
      detailsField: ['']
    });
  }

  ngOnDestroy() {
    if (this.postPhotoUserSub) {
      this.postPhotoUserSub.unsubscribe()
    }
  }

  postPhoto(data) {
    this.postPhotoUserSub = this.dashboardService.postUserPhoto(data).subscribe(data => {
      this.fileInformation = data as FileInformation;
      this.updated = false
    }, error => {
      this.userPhotoErrors = error['error']['detail'];
      this.errorService.handleError(error);
    });
  }

  handleSubmit() {
    let formData: FormData = new FormData();
    formData.append('link', this.profilForm.get('linkField').value);
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    } else {
      formData.append('file', this.profilForm.get('fileField').value);
    }
    formData.append('details', this.profilForm.get('detailsField').value);

    this.postPhoto(formData);
    this.closeModal();
  }

  revert() {
    this.profilForm.reset()
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.profilForm.get('fileField').setValue(this.file.name);
      this.fileInformation = null;
    }
  }

  selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
