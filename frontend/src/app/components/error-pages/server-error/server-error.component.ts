import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.sass']
})
export class ServerErrorComponent implements OnInit {

  reportedError: boolean;
  errorPercentage: number = 0;
  timer: any;

  constructor() { }

  ngOnInit() {
  }

  checkChanged = (event) => {
    this.reportedError = event.checked;
    this.reportedError ? this.startTimer() : this.stopTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.errorPercentage += 1;
      if (this.errorPercentage === 100) {
        clearInterval(this.timer);
      }
    }, 30);
  }
  
  stopTimer = () => {
    clearInterval(this.timer);
    this.errorPercentage = 0;
  }

}
