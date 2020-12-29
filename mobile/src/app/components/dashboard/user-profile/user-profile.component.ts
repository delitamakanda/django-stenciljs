import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorHandlerService } from '../../../shared/error-handler.service';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewPhotoComponent } from './new-photo/new-photo.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  listAccountDetailPhotoSub: Subscription;
  results: any = [];

  constructor(
    private dashboardService: DashboardService,
    private errorService: ErrorHandlerService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.listAccountDetailPhotoSub = this.dashboardService.detailUserPhoto().subscribe(data => {
      this.results = data;
    }, error => {
      this.errorService.handleError(error);
    });
  }

  ngOnDestroy() {
    if (this.listAccountDetailPhotoSub) {
      this.listAccountDetailPhotoSub.unsubscribe()
    }
  }

  likePhoto(id: number) {
    console.log(id)
  }

  async deletePhoto(id: number) {
    await this.dashboardService.deleteUserPhoto(id).toPromise();
    this.getPhotos();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(NewPhotoComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(response => {
      if (response.data && response.data === 'ok') {
        this.getPhotos()
      }
    })
  }



}
