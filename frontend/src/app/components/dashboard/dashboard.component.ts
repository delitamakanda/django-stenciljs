import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { User } from '../../models/user';
import { AuthLogin } from '../../models/auth';
import { FileInformation } from '../../models/file-information';

import { AuthService } from '../../services/auth/auth.service';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { TranslateService } from '../../services/translate/translate.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, ErrorStateMatcher {
    listAccountDetail: any;
    listAccountDetailPhoto: any;
    results2 = [];
    results = [];
    userData: User;
    tokenExists: boolean;
    updated: boolean;

    postPhotoUserSub: any;

    profilForm: FormGroup;
    linkField: FormControl;
    fileField: FormControl;
    detailsField: FormControl;
    userPhotoErrors: any;

    file: File;
    fileInformation: FileInformation;

    @ViewChild('fileInput')
    fileInput: ElementRef;
    isInputValid: boolean = false;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    constructor(
        private translate: TranslateService,
        private dashboardService: DashboardService,
        private authService: AuthService,
        public cookieService: CookieService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.getData();

        this.linkField = new FormControl("");
        this.fileField = new FormControl("");
        this.detailsField = new FormControl("", [
            Validators.required
        ]);

        this.profilForm = new FormGroup({
            'linkField': this.linkField,
            'fileField': this.fileField,
            'detailsField': this.detailsField
        });
    }

    isValid(data) {
        const valid = /^([0-9]*[1-9][0-9]*)$/.test(data);
        if (valid) {
          this.isInputValid = true
        }
        else {
          this.isInputValid = false;
        }
    }

    getData(){
        this.listAccountDetail = this.dashboardService.detailUser().subscribe(data=>{
            this.results = data
        });

        this.listAccountDetailPhoto = this.dashboardService.detailUserPhoto().subscribe(data=>{
            console.log(data)
            this.results2 = data
        });
    }

    ngOnDestroy() {
        if (this.listAccountDetail){
            this.listAccountDetail.unsubscribe()
        }

        if (this.listAccountDetailPhoto){
            this.listAccountDetailPhoto.unsubscribe()
        }

        if (this.postPhotoUserSub) {
            this.postPhotoUserSub.unsubscribe()
        }
    }

    likePhoto(id: number) {
        console.log(id)
    }

    deletePhoto(id: number) {
        return this.dashboardService.deleteUserPhoto(id).subscribe(data => {
            this.getData()
        });
    }

    postPhoto(data) {
        this.postPhotoUserSub = this.dashboardService.postUserPhoto(data).subscribe(data=>{
            this.fileInformation = data as FileInformation
            this.getData()
            this.updated = false
        }, error=>{
            this.userPhotoErrors = error['error']
        })
    }

    handleSubmit(event:any, ourUserPhotoDir:NgForm, userPhotoFormGroup:FormGroup) {
        event.preventDefault();
        if(ourUserPhotoDir.submitted) {
            let userPhotoData: FormData = new FormData();
            userPhotoData.append(`link`, userPhotoFormGroup.value['linkField'])
            if (this.file) {
                userPhotoData.append(`file`, this.file, this.file.name)
            } else {
                userPhotoData.append(`file`, userPhotoFormGroup.value['fileField'])
            }

            userPhotoData.append(`details`, userPhotoFormGroup.value['detailsField'])
            this.postPhoto(userPhotoData);
            ourUserPhotoDir.resetForm({})
        };
    }

    onSelectFile(event) {
        if(event.target.files && event.target.files.length > 0) {
            this.file = event.target.files[0];
            console.log(this.file)
            this.profilForm.get('fileField').setValue(this.file.name);
            // console.log(`file: ${JSON.stringify(this.file.name)}`);
            // console.log(`file: ${JSON.stringify(this.file.size)}`);
            this.fileInformation = null;
          }
    }

    selectFile(): void {
        this.fileInput.nativeElement.click();
    }

}
