import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from './services/translate/translate.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(
        private translate: TranslateService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIcon(
          "love",
          this.domSanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/assets/love_icon.svg")
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    setLang(lang: string) {
        this.translate.use(lang);
    }
}
