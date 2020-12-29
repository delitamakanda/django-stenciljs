import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewConversationComponent } from './new-conversation/new-conversation.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "new-conversation-component";
    dialogConfig.width = "450px";
    const modalDialog = this.matDialog.open(NewConversationComponent, dialogConfig);

    modalDialog.afterClosed().subscribe( response => {
      console.log(response);
    })
  }

}
