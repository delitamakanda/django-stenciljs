(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container\">\n    <app-side-nav></app-side-nav>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chats/chats/chats.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chats/chats/chats.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p>lorem ipsum sit dolor amet chats</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <br/>\n    <button mat-icon-button mat-mini-fab type=\"button\" (click)=\"updated = !updated\" title=\"{{ 'updatedProfileSettings' | translate }}\">\n        <mat-icon>{{updated ? 'expand_less' : 'expand_more'}}</mat-icon>\n    </button>\n    <br/>\n    <mat-card *ngIf=\"updated\" class=\"card-image\">\n        <form [formGroup]=\"profilForm\" #ourUserPhotoDir='ngForm' (submit)='handleSubmit($event, ourUserPhotoDir, profilForm)' enctype=\"multipart/form-data\">\n            <p *ngIf='userPhotoErrors'>{{ userPhotoErrors }}</p>\n            <div class=\"lg-container\">\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"{{ 'labelLink' | translate }}\" formControlName=\"linkField\" />\n                </mat-form-field>\n                <input type=\"file\" id=\"userFile\" (change)=\"onSelectFile($event)\" #fileInput style=\"display: none\">\n                <mat-form-field>\n                    <input matInput formControlName=\"fileField\" placeholder=\"{{ 'labelFile' | translate }}\" readonly />\n                </mat-form-field>\n                <!--<div *ngIf=\"fileInformation\">\n                    <p>{{fileInformation.filename}}</p>\n                    <p>{{fileInformation.size}}</p>\n                </div>-->\n                <button mat-raised-button type=\"button\" (click)=\"selectFile()\">{{ 'labelSelect' | translate }}</button>\n                <mat-form-field>\n                    <textarea matInput placeholder=\"{{ 'labelDetails' | translate }}\" formControlName=\"detailsField\"></textarea>\n                    <div *ngIf='detailsField.invalid && (detailsField.dirty || detailsField.touched)'>\n                    <mat-error *ngIf='detailsField.errors.required'>\n                      {{ 'labelDetailsRequired' | translate }}\n                    </mat-error>\n                    </div>\n                </mat-form-field>\n                <mat-card-actions>\n                    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"profilForm.invalid\">{{ 'labelValidate' | translate }}</button>\n                    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"ourUserPhotoDir.resetForm({})\">{{ 'resetLabel' | translate }}</button>\n                </mat-card-actions>\n            </div>\n        </form>\n    </mat-card>\n\n    <mat-card class=\"card-image\">\n        <mat-card-header>\n            <div mat-card-avatar>\n                <img ngxGravatar *ngIf=\"results.email\" [email]=\"results.email\">\n            </div>\n            <mat-card-title>{{ results.displayName }}</mat-card-title>\n            <mat-card-subtitle>{{ 'labelPopularity' | translate }} : {{ results.popularity }}</mat-card-subtitle>\n        </mat-card-header>\n    </mat-card>\n\n    <div *ngIf=\"results2\">\n        <mat-card *ngFor=\"let res of results2\" class=\"card-image\">\n            <img mat-card-image *ngIf=\"res.file\" [src]=\"res.file\" [alt]=\"res.details\">\n            <img mat-card-image *ngIf=\"res.link && res.link != 'null'\" [src]=\"res.link\" [alt]=\"res.details\">\n            <mat-card-content>\n                <p>\n                  {{ res.details }}\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n            <button mat-button (click)=\"likePhoto(res.id)\"><mat-icon>favorite</mat-icon></button>\n            <button mat-button (click)=\"deletePhoto(res.id)\"><mat-icon>delete</mat-icon></button>\n          </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/help/help/help.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/help/help/help.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p>lorem ipsum sit dolor amet</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box flex\">\n\t<p>\n\t\t<!--<img src=\"http://localhost:4200/assets/logo-love.svg\" class=\"logo\">-->\n\t\t<mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n\t</p>\n\t<p>\n\t\t<button mat-raised-button routerLink=\"login\">{{ 'loginLabel' | translate }}</button>\n\t</p>\n\t<p>\n\t\t<button mat-raised-button routerLink=\"register\">{{ 'registerLabel' | translate }}</button>\n\t</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <p *ngIf='didLogin'>\n        Welcome! Get started <a [routerLink]=\"'/'\">here</a>.<br/><br/>\n    </p>\n    <p *ngIf='tokenExists'>\n    You are already logged in! Would you like to <a routerLink='/logout'>logout</a>?\n\n        </p>\n    <p>\n        <mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n    </p>\n\n    <form *ngIf='!userData && !tokenExists' [formGroup]='loginForm' #ourLoginDir='ngForm' (submit)='handleSubmit($event, ourLoginDir, loginForm)'>\n        <p *ngIf='loginErrors'>{{ loginErrors }}</p>\n        <div class=\"tp-container\">\n        <mat-form-field appearance=\"standard\">\n            <input type=\"text\" maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelEmailOrUsername' | translate }}\" formControlName=\"usernameField\" />\n            <div *ngIf=\"usernameField.invalid && (usernameField.dirty || usernameField.touched)\">\n                <mat-error *ngIf='usernameField.errors.required'>\n                  {{ 'labelUsernameRequired' | translate }}\n                </mat-error>\n\n                <mat-error *ngIf='usernameField.errors.maxlength'>\n                   {{ 'labelMaxLength' | translate }} 280\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.minlength'>\n                  {{ 'labelMinLength' | translate }}  4\n                </mat-error>\n            </div>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"standard\">\n            <input type=\"password\" maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelPassword' | translate }}\" formControlName=\"passwordField\" [type]=\"hide ? 'password' : 'text'\" />\n            <button type=\"button\" mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <div *ngIf='passwordField.invalid && (passwordField.dirty || passwordField.touched)'>\n                <mat-error *ngIf='passwordField.errors.required'>\n                    {{ 'labelPasswordRequired' | translate }}\n                </mat-error>\n                <mat-error *ngIf='passwordField.errors.maxlength'>\n                    {{ 'labelMaxLength' | translate }} 280\n                </mat-error>\n                <mat-error *ngIf='passwordField.errors.minlength'>\n                    {{ 'labelMinLength' | translate }}  4\n                </mat-error>\n            </div>\n        </mat-form-field>\n        <mat-card-actions>\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">{{ 'loginLabel' | translate }}</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"ourLoginDir.resetForm({})\">{{ 'resetLabel' | translate }}</button>\n        </mat-card-actions>\n        </div>\n    </form>\n\n\t<p>\n\t\t<button mat-raised-button routerLink='/register'>{{ 'registerLabel' | translate }}</button>\n\t</p>\n    <!--<mat-form-field>\n      <input type=\"email\" matInput placeholder=\"Username or Email\" [(ngModel)]=\"user.emailOrUsername\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address or username\n      </mat-error>\n      <mat-error *ngFor=\"let error of userService.errors.username\">{{ error }}</mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>-->\n\n  <!--<mat-form-field>\n    <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"user.password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    <mat-error *ngFor=\"let error of userService.errors.password\">{{ error }}</mat-error>\n  </mat-form-field>-->\n\n  <!--<button (click)=\"signin()\" mat-raised-button>Login</button>-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <p>\n        <button mat-raised-button routerLink=\"/login\">{{ 'loginLabel' | translate }}</button>\n    </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation-bar/navigation-bar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"navigation-toolbar\">\n\n  <mat-toolbar-row>\n\n    <button mat-icon-button (click)=\"toggleSidenav.emit()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <span class=\"toolbar-title\"> {{ 'title' | translate }} </span>\n\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n\n      <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n\n        <li fxHide.xs>\n          <button mat-icon-button [routerLink]=\"['/settings']\">\n            <mat-icon>settings</mat-icon>\n          </button>\n        </li>\n\n        <li fxHide.xs>\n          <button mat-icon-button [routerLink]=\"['/help']\">\n            <mat-icon>help_outline</mat-icon>\n          </button>\n        </li>\n\n        <li>\n          <button mat-icon-button [matMenuTriggerFor]=\"auth\">\n            <mat-icon>person_outline</mat-icon>\n          </button>\n          <mat-menu #auth=\"matMenu\">\n            <button mat-menu-item (click)=\"goToProfile()\">\n              <mat-icon>person</mat-icon>\n              <span>{{ 'PROFILE' | translate }}</span>\n            </button>\n            <button mat-menu-item (click)=\"logout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>{{ 'LOGOUT' | translate }}</span>\n            </button>\n          </mat-menu>\n        </li>\n\n      </ul>\n\n    </div>\n\n  </mat-toolbar-row>\n\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <p>\n        <mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n    </p>\n    <form [formGroup]=\"registerForm\" #ourRegisterDir='ngForm' (submit)=\"handleSubmit($event, ourRegisterDir, registerForm)\">\n        <p *ngIf='loginErrors'>{{ loginErrors.email }}</p>\n        <p *ngIf='loginErrors'>{{ loginErrors.username }}</p>\n\n        <div class=\"tp-container\">\n            <mat-form-field>\n                <input type=\"text\" maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelUsername' | translate }}\" formControlName=\"usernameField\" />\n                <div *ngIf='usernameField.invalid && (usernameField.dirty || usernameField.touched)'>\n                <mat-error *ngIf='usernameField.errors.required'>\n                  {{ 'labelUsernameRequired' | translate }}\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.maxlength'>\n                   {{ 'labelMaxLength' | translate }} 280\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.minlength'>\n                  {{ 'labelMinLength' | translate }}  4\n                </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"text\" maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelEmail' | translate }}\" formControlName=\"emailField\" />\n                <div *ngIf='emailField.invalid && (emailField.dirty || emailField.touched)'>\n                <mat-error *ngIf='emailField.errors.required'>\n                 {{ 'labelEmailRequired' | translate }}\n                </mat-error>\n                <mat-error *ngIf='emailField.errors.maxlength'>\n                    {{ 'labelMaxLength' | translate }} 280\n                </mat-error>\n                <mat-error *ngIf='emailField.errors.minlength'>\n                  {{ 'labelMinLength' | translate }}  4\n                </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"password\" maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelPassword' | translate }}\" formControlName=\"passwordField\" [type]=\"hide ? 'password' : 'text'\" />\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n                <div *ngIf='passwordField.invalid && (passwordField.dirty || passwordField.touched)'>\n                    <mat-error *ngIf='passwordField.errors.required'>\n                        {{ 'labelPasswordRequired' | translate }}\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.maxlength'>\n                        {{ 'labelMaxLength' | translate }} 280\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.minlength'>\n                        {{ 'labelMinLength' | translate }}  4\n                    </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"password\"  maxlength=\"280\" minlength=\"4\" matInput placeholder=\"{{ 'labelPasswordConfirm' | translate }}\" formControlName=\"passwordFieldVerification\" [type]=\"hide2 ? 'password' : 'text'\" />\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide2\">\n                    <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </button>\n                <div *ngIf='passwordFieldVerification.invalid && (passwordFieldVerification.dirty || passwordFieldVerification.touched)'>\n                    <mat-error *ngIf='passwordFieldVerification.errors.required'>\n                        {{ 'labelPasswordRequired' | translate }}\n                    </mat-error>\n                    <mat-error *ngIf='passwordFieldVerification.errors.maxlength'>\n                        {{ 'labelMaxLength' | translate }} 280\n                    </mat-error>\n                    <mat-error *ngIf='passwordFieldVerification.errors.minlength'>\n                        {{ 'labelMinLength' | translate }}  4\n                    </mat-error>\n                </div>\n            </mat-form-field>\n            <div>\n                <label>{{ 'labelGender' | translate }}: </label>\n                <mat-radio-group aria-label=\"Select an option\" formControlName=\"genderField\" class=\"radio-group\">\n                  <mat-radio-button class=\"radio-button\" *ngFor=\"let gender of listResultGenders\" [value]=\"gender.id\">{{ gender.name }}</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        <mat-card-actions>\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"registerForm.invalid\">{{ 'registerLabel' | translate }}</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"ourRegisterDir.resetForm({})\">{{ 'resetLabel' | translate }}</button>\n        </mat-card-actions>\n        </div>\n    </form>\n    <p>\n\t\t<button mat-raised-button routerLink='/login'>{{ 'loginLabel' | translate }}</button>\n\t</p>\n\n    <!--<mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Username\" [(ngModel)]=\"register.username\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"register.password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"register.email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n        <mat-hint>Errors appear instantly!</mat-hint>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <button (click)=\"createAccount()\" mat-raised-button>Register</button>-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/setting/setting.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/setting/setting.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p>lorem ipsum sit dolor amet settings</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"over\">\n\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <h2 class=\"toolbar-title\"> {{ 'title' | translate }} </h2>\n      </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-nav-list>\n\n      <h2 matSubheader> {{ 'PROFILE' | translate }} </h2>\n\n      <a mat-list-item routerLink=\"/\" style=\"height: 0;\"></a>\n\n      <a *ngFor=\"let item of myWorkRoutes\"\n         mat-list-item\n         (click)=\"sidenav.close()\"\n         routerLinkActive\n         #routerLinkActiveInstance=\"routerLinkActive\"\n         [class.list-item-active]=\"routerLinkActiveInstance.isActive\"\n         [routerLink]=\"[item.route]\">\n        <mat-icon matListIcon class=\"app-nav-list-icon\"> {{ item.icon }} </mat-icon>\n        {{item.title}}\n      </a>\n\n      <mat-divider></mat-divider>\n\n      <a mat-list-item (click)=\"setLang('fr')\">FR</a>\n      <a mat-list-item (click)=\"setLang('en')\">EN</a>\n\n    </mat-nav-list>\n\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n      <app-navigation-bar *ngIf=\"isAuthenticated()\" (toggleSidenav)=\"sidenav.toggle()\"></app-navigation-bar>\n      <router-outlet></router-outlet>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user/user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user/user.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p>lorem ipsum sit dolor amet user</p>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_settings_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings/setting/setting.component */ "./src/app/components/settings/setting/setting.component.ts");
/* harmony import */ var _components_help_help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/help/help/help.component */ "./src/app/components/help/help/help.component.ts");
/* harmony import */ var _components_chats_chats_chats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chats/chats/chats.component */ "./src/app/components/chats/chats/chats.component.ts");
/* harmony import */ var _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/user/user.component */ "./src/app/components/user/user/user.component.ts");












var routes = [
    { path: '*', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: 'settings', component: _components_settings_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"] },
    { path: 'help', component: _components_help_help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"] },
    { path: 'chats', component: _components_chats_chats_chats_component__WEBPACK_IMPORTED_MODULE_10__["ChatsComponent"] },
    { path: 'profile', component: _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbiIsIi5hcHAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("love", this.domSanitizer.bypassSecurityTrustResourceUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].staticAssetsUrl + "love_icon.svg"));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user/gender/gender.service */ "./src/app/services/user/gender/gender.service.ts");
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/dashboard/dashboard.service */ "./src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _pipes_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/translate/translate.pipe */ "./src/app/pipes/translate/translate.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var ngx_gravatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-gravatar */ "./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth/token.interceptor */ "./src/app/services/auth/token.interceptor.ts");
/* harmony import */ var _components_settings_setting_setting_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/settings/setting/setting.component */ "./src/app/components/settings/setting/setting.component.ts");
/* harmony import */ var _components_help_help_help_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/help/help/help.component */ "./src/app/components/help/help/help.component.ts");
/* harmony import */ var _components_chats_chats_chats_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/chats/chats/chats.component */ "./src/app/components/chats/chats/chats.component.ts");
/* harmony import */ var _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user/user/user.component */ "./src/app/components/user/user/user.component.ts");




















// UI










function setupTranslateFactory(service) {
    return function () { return service.use('fr'); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _pipes_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_17__["LandingComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_21__["NavigationBarComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_22__["SideNavComponent"],
                _components_settings_setting_setting_component__WEBPACK_IMPORTED_MODULE_26__["SettingComponent"],
                _components_help_help_help_component__WEBPACK_IMPORTED_MODULE_27__["HelpComponent"],
                _components_chats_chats_chats_component__WEBPACK_IMPORTED_MODULE_28__["ChatsComponent"],
                _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                // ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                ngx_gravatar__WEBPACK_IMPORTED_MODULE_23__["GravatarModule"]
            ],
            providers: [
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_9__["GenderService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"],
                _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]],
                    multi: true
                },
                _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptor"],
                _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chats/chats/chats.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/chats/chats/chats.component.sass ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdHMvY2hhdHMvY2hhdHMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/components/chats/chats/chats.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/chats/chats/chats.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatsComponent = /** @class */ (function () {
    function ChatsComponent() {
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    ChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chats',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chats/chats/chats.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chats.component.sass */ "./src/app/components/chats/chats/chats.component.sass")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatsComponent);
    return ChatsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-image {\n  margin-top: 1em;\n}\n\n.lg-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.lg-container > * {\n  width: 100%;\n  margin: 0 auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0FDQ0g7O0FERUE7RUFDRyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5sZy1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sZy1jb250YWluZXIgPiAqIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luOiAwIGF1dG87XG4gICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iLCIuY2FyZC1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmxnLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sZy1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dashboard/dashboard.service */ "./src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(translate, dashboardService, authService, cookieService, formBuilder) {
        this.translate = translate;
        this.dashboardService = dashboardService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.results2 = [];
        this.results = [];
        this.isInputValid = false;
    }
    DashboardComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getData();
        this.linkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.fileField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.detailsField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.profilForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'linkField': this.linkField,
            'fileField': this.fileField,
            'detailsField': this.detailsField
        });
    };
    DashboardComponent.prototype.isValid = function (data) {
        var valid = /^([0-9]*[1-9][0-9]*)$/.test(data);
        if (valid) {
            this.isInputValid = true;
        }
        else {
            this.isInputValid = false;
        }
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.listAccountDetail = this.dashboardService.detailUser().subscribe(function (data) {
            _this.results = data;
        });
        this.listAccountDetailPhoto = this.dashboardService.detailUserPhoto().subscribe(function (data) {
            console.log(data);
            _this.results2 = data;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.listAccountDetail) {
            this.listAccountDetail.unsubscribe();
        }
        if (this.listAccountDetailPhoto) {
            this.listAccountDetailPhoto.unsubscribe();
        }
        if (this.postPhotoUserSub) {
            this.postPhotoUserSub.unsubscribe();
        }
    };
    DashboardComponent.prototype.likePhoto = function (id) {
        console.log(id);
    };
    DashboardComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        return this.dashboardService.deleteUserPhoto(id).subscribe(function (data) {
            _this.getData();
        });
    };
    DashboardComponent.prototype.postPhoto = function (data) {
        var _this = this;
        this.postPhotoUserSub = this.dashboardService.postUserPhoto(data).subscribe(function (data) {
            _this.fileInformation = data;
            _this.getData();
            _this.updated = false;
        }, function (error) {
            _this.userPhotoErrors = error['error'];
        });
    };
    DashboardComponent.prototype.handleSubmit = function (event, ourUserPhotoDir, userPhotoFormGroup) {
        event.preventDefault();
        if (ourUserPhotoDir.submitted) {
            var userPhotoData = new FormData();
            userPhotoData.append("link", userPhotoFormGroup.value['linkField']);
            if (this.file) {
                userPhotoData.append("file", this.file, this.file.name);
            }
            else {
                userPhotoData.append("file", userPhotoFormGroup.value['fileField']);
            }
            userPhotoData.append("details", userPhotoFormGroup.value['detailsField']);
            this.postPhoto(userPhotoData);
            ourUserPhotoDir.resetForm({});
        }
        ;
    };
    DashboardComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            this.file = event.target.files[0];
            console.log(this.file);
            this.profilForm.get('fileField').setValue(this.file.name);
            // console.log(`file: ${JSON.stringify(this.file.name)}`);
            // console.log(`file: ${JSON.stringify(this.file.size)}`);
            this.fileInformation = null;
        }
    };
    DashboardComponent.prototype.selectFile = function () {
        this.fileInput.nativeElement.click();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { read: true, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "fileInput", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help/help.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/components/help/help/help.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwL2hlbHAuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/components/help/help/help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/help/help/help.component.ts ***!
  \********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/help/help/help.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.sass */ "./src/app/components/help/help/help.component.sass")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box.flex {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n\n.box p {\n  text-align: center;\n}\n\nmat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0ksZUFmRztFQWdCSCxZQWhCRztFQWlCSCxXQWpCRztFQWtCSCxpQkFsQkc7QUNpQlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG4uYm94LmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iLCIuYm94LmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/landing/landing.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUhHO0VBSUgsWUFKRztFQUtILFdBTEc7RUFNSCxpQkFORztBQ0tQIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iLCJtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _models_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/auth */ "./src/app/models/auth.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







// import { CookieService } from 'angular2-cookie/core';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(translate, userService, authService, cookieService) {
        this.translate = translate;
        this.userService = userService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.hide = true;
        this.didLogin = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
    }
    LoginComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    LoginComponent.prototype.ngOnInit = function () {
        var username = this.authService.getUsername();
        this.usernameField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](username, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.passwordField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'usernameField': this.usernameField,
            'passwordField': this.passwordField
        });
        this.tokenExists = this.authService.checkToken();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.authLoginSub) {
            this.authLoginSub.unsubscribe();
        }
    };
    LoginComponent.prototype.doLogin = function (data) {
        var _this = this;
        this.authLoginSub = this.authService.login(data).subscribe(function (data) {
            _this.userData = data;
            var token = _this.userData.token || null;
            var date = new Date(data.expires);
            _this.authService.performLogin(token, date);
            _this.authService.setUsername(_this.userData);
            _this.didLogin = true;
        }, function (error) {
            _this.loginErrors = error['error']['detail'];
        });
    };
    LoginComponent.prototype.handleSubmit = function (event, ourLoginDir, loginFormGroup) {
        event.preventDefault();
        if (ourLoginDir.submitted) {
            // interact with the server
            var authLoginData = new _models_auth__WEBPACK_IMPORTED_MODULE_6__["AuthLogin"](loginFormGroup.value['usernameField'], loginFormGroup.value['passwordField']);
            this.doLogin(authLoginData);
            ourLoginDir.resetForm({});
        }
    };
    LoginComponent.prototype.login = function () {
        this.userService.login({ 'username': this.user.emailOrUsername, 'password': this.user.password });
    };
    LoginComponent.prototype.signin = function () {
        this.authService.login(this.user);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.performLogout("Logout");
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.scss */ "./src/app/components/logout/logout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-title {\n  margin: 0 16px 0 16px;\n}\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.navigation-toolbar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvb2xiYXItdGl0bGUtcGFkZGluZzogMTZweCAhZGVmYXVsdDtcblxuLnRvb2xiYXItdGl0bGUge1xuICBtYXJnaW46IDAgJHRvb2xiYXItdGl0bGUtcGFkZGluZyAwICR0b29sYmFyLXRpdGxlLXBhZGRpbmc7XG59XG5cbi5uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAzO1xufVxuIiwiLnRvb2xiYXItdGl0bGUge1xuICBtYXJnaW46IDAgMTZweCAwIDE2cHg7XG59XG5cbi5uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDM7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");





var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(translate, authService, router) {
        this.translate = translate;
        this.authService = authService;
        this.router = router;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAuthenticated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavigationBarComponent.prototype.ngOnInit = function () { };
    NavigationBarComponent.prototype.logout = function () {
        this.authService.performLogout("logout message");
        this.router.navigate(['/logout']);
    };
    NavigationBarComponent.prototype.goToProfile = function () {
        this.router.navigate(['/profile']);
    };
    NavigationBarComponent.ctorParameters = function () { return [
        { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationBarComponent.prototype, "toggleSidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationBarComponent.prototype, "isAuthenticated", void 0);
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation-bar/navigation-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/components/navigation-bar/navigation-bar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px;\n}\n\n.radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.radio-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUhHO0VBSUgsWUFKRztFQUtILFdBTEc7RUFNSCxpQkFORztBQ0tQOztBREtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG5cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiIsIm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user/gender/gender.service */ "./src/app/services/user/gender/gender.service.ts");
/* harmony import */ var _models_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/auth */ "./src/app/models/auth.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, authService, genderService, router) {
        this.userService = userService;
        this.authService = authService;
        this.genderService = genderService;
        this.router = router;
        this.hide = true;
        this.hide2 = true;
        this.listResultGenders = [];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.listGenders();
    }
    RegisterComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    RegisterComponent.prototype.listGenders = function () {
        var _this = this;
        this.listGender = this.genderService.getGenders().subscribe(function (data) {
            console.log(data);
            _this.listResultGenders = data;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.usernameField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.emailField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.passwordField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.passwordFieldVerification = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280)
        ]);
        this.genderField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'usernameField': this.usernameField,
            'passwordField': this.passwordField,
            'passwordFieldVerification': this.passwordFieldVerification,
            'emailField': this.emailField,
            'genderField': this.genderField
        });
        /*this.register = {
            username: '',
            password: '',
            email: '',
            confirmation_code: 'toto',
            details: 'toto'
        };*/
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.authLoginSub) {
            this.authLoginSub.unsubscribe();
        }
        if (this.listGender) {
            this.listGender.unsubscribe();
        }
    };
    RegisterComponent.prototype.createAccount = function (data) {
        var _this = this;
        /*this.userService.registerUser(this.register).subscribe(
            response => {
                alert('User ' + this.register.username + ' has been created!')
            },
            error => console.log('error' , error)
        )*/
        // this.userService.registerUser(this.register);
        this.authLoginSub = this.authService.register(data).subscribe(function (data) {
            _this.userData = data;
            _this.authService.setUsername(_this.userData);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
            _this.loginErrors = error['error'];
        });
    };
    RegisterComponent.prototype.handleSubmit = function (event, ourRegisterDir, registerFormGroup) {
        event.preventDefault();
        if (ourRegisterDir.submitted) {
            var authRegisterData = new _models_auth__WEBPACK_IMPORTED_MODULE_7__["AuthRegister"](registerFormGroup.value['usernameField'], registerFormGroup.value['emailField'], registerFormGroup.value['passwordField'], registerFormGroup.value['passwordFieldVerification'], registerFormGroup.value['genderField']);
            this.createAccount(authRegisterData);
            ourRegisterDir.resetForm({});
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_6__["GenderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_6__["GenderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/setting/setting.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/components/settings/setting/setting.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/components/settings/setting/setting.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/settings/setting/setting.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/setting/setting.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.sass */ "./src/app/components/settings/setting/setting.component.sass")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(translate, authService) {
        this.translate = translate;
        this.authService = authService;
        this.myWorkRoutes = [
            {
                icon: 'assignment',
                route: 'dashboard',
                title: 'Board',
            },
            {
                icon: 'people',
                route: 'chats',
                title: 'Chat',
            },
            {
                icon: 'help',
                route: 'help',
                title: 'Help',
            },
            {
                icon: 'settings',
                route: 'settings',
                title: 'Settings',
            }
        ];
        this.customerRoutes = [];
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.isAuthenticated = function () {
        return this.authService.checkToken();
    };
    SideNavComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    SideNavComponent.ctorParameters = function () { return [
        { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/components/side-nav/side-nav.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/user.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/components/user/user/user.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/components/user/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user/user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.sass */ "./src/app/components/user/user/user.component.sass")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/models/auth.ts":
/*!********************************!*\
  !*** ./src/app/models/auth.ts ***!
  \********************************/
/*! exports provided: AuthLogin, AuthRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogin", function() { return AuthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegister", function() { return AuthRegister; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AuthLogin = /** @class */ (function () {
    function AuthLogin(usn, pwd) {
        this.username = usn;
        this.password = pwd;
    }
    return AuthLogin;
}());

var AuthRegister = /** @class */ (function () {
    function AuthRegister(usn, eml, pwd, pwdConfirm, gendr) {
        this.username = usn;
        this.email = eml;
        this.password = pwd;
        this.password2 = pwdConfirm;
        this.gender = gendr;
    }
    return AuthRegister;
}());



/***/ }),

/***/ "./src/app/pipes/translate/translate.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/translate/translate.pipe.ts ***!
  \***************************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key] || key;
    };
    TranslatePipe.ctorParameters = function () { return [
        { type: _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// import { CookieService } from 'angular2-cookie/core';


var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService, router, route) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + "api/";
        this.auth$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    AuthService.prototype.isAuthenticated = function (status) {
        this.auth$.next(status);
    };
    AuthService.prototype.createHeaders = function (token) {
        var data = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': this.cookieService.get('csrftoken')
        };
        if (token) {
            data['Authorization'] = "JWT " + token;
        }
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](data)
        };
        return this.httpOptions;
    };
    AuthService.prototype.checkToken = function () {
        return this.cookieService.check("jwttoken");
    };
    AuthService.prototype.getToken = function () {
        return this.cookieService.get("jwttoken");
    };
    AuthService.prototype.performLogout = function (msg) {
        return this.cookieService.delete('jwttoken', '/');
        // this.deleteUsername()
        this.router.navigate(['/']);
    };
    AuthService.prototype.getNextUrl = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['next']) {
                _this.nextUrl = params['next'];
                switch (_this.nextUrl) {
                    case "/account/delete":
                        _this.nextUrl = null;
                        break;
                }
            }
        });
        return this.nextUrl;
    };
    AuthService.prototype.setUsername = function (user) {
        this.cookieService.set('username', user.username);
    };
    AuthService.prototype.deleteUsername = function () {
        this.cookieService.delete('username');
    };
    AuthService.prototype.getUsername = function () {
        return this.cookieService.get('username') || null;
    };
    AuthService.prototype.performLogin = function (token, expires, msg) {
        var expiryDate = null;
        if (expires) {
            expiryDate = expires;
        }
        this.cookieService.set('jwttoken', token, expiryDate, "/");
        var nextUrl = this.getNextUrl();
        if (nextUrl) {
            this.router.navigate([nextUrl]);
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    /*
    login(userData) {
    let url: string = '/api/login-user';
    return this.http.post(url, userData, { headers: this.httpOptions }).subscribe(
    data => {
    console.log(data)
    if( data['status'] == 'success' ) {
    //this.cookieService.put('token', data['token']);
} else {
console.log('Invalid Credentials');
}
},
err => {
console.log(err);
}
);
}

register(userData) {
let url: string = '/api/register-user';
return this.http.post(url, userData, { headers: this.httpOptions }).subscribe(
data => {
console.log(data);
},
err => {
console.log(err);
}
);
}*/
    AuthService.prototype.login = function (data) {
        // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNmZSIsImV4cCI6MTUxNzQzMDkzNSwiZW1haWwiOiJoZWxsb0B0ZWFtY2ZlLmNvbSIsIm9yaWdfaWF0IjoxNTE3NDMwNjM1fQ.pB6-lE55DBBu0pGv_r85oFaI3OODc69MlAIfno7SM_w'
        var httpOptions = this.createHeaders();
        var apiLoginEndpoint = this.baseUrl + "login-user/";
        return this.http.post(apiLoginEndpoint, data, httpOptions); // , httpOptions)
    };
    AuthService.prototype.register = function (data) {
        var httpOptions = this.createHeaders();
        var apiRegisterEndpoint = this.baseUrl + "register-user/";
        return this.http.post(apiRegisterEndpoint, data, httpOptions);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/token.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/services/auth/token.interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var csrftoken = this.cookieService.get('csrftoken');
        var jwttoken = this.cookieService.get('jwttoken');
        if (jwttoken) {
            request = request.clone({
                setHeaders: {
                    // This is where you can use your various tokens
                    Authorization: "JWT " + jwttoken,
                    'X-CSRFToken': "" + csrftoken
                }
            });
        }
        return next.handle(request).do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log(event, "cool it worked!");
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401 || err.status === 403) {
                    var currentUrl = _this.router.url;
                    if (currentUrl != '/login') {
                        alert("Session ended. Please login again");
                        _this.cookieService.delete('jwttoken');
                        _this.router.navigate(['/login'], { queryParams: { next: currentUrl } });
                    }
                    // /login?next=/status/create
                }
            }
        });
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/services/dashboard/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");






var DashboardService = /** @class */ (function () {
    function DashboardService(http, cookieService, authService) {
        this.http = http;
        this.cookieService = cookieService;
        this.authService = authService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "api/";
    }
    DashboardService.prototype.createHeaders = function (token) {
        var data = {
            //'Accept': 'application/json',
            //'Content-Type': 'application/json',
            'X-CSRFToken': this.cookieService.get('csrftoken')
        };
        if (token) {
            data['Authorization'] = "JWT " + token;
        }
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](data)
        };
        console.log(this.httpOptions.headers);
        return this.httpOptions;
    };
    DashboardService.prototype.detailUser = function () {
        var username = this.authService.getUsername();
        var apiListEndpoint = this.baseUrl + "user/" + username + "/";
        return this.http.get(apiListEndpoint);
    };
    DashboardService.prototype.detailUserPhoto = function () {
        var username = this.authService.getUsername();
        var apiListEndpoint = this.baseUrl + "user/" + username + "/photo/";
        return this.http.get(apiListEndpoint);
    };
    DashboardService.prototype.postUserPhoto = function (data) {
        var httpOptions = this.createHeaders();
        var apiListEndpoint = this.baseUrl + "user-photo/";
        return this.http.post(apiListEndpoint, data, httpOptions);
    };
    DashboardService.prototype.deleteUserPhoto = function (id) {
        var httpOptions = this.createHeaders();
        var apiDeleteEndpoint = this.baseUrl + "user-photo/" + id + "/detail/";
        return this.http.delete(apiDeleteEndpoint, httpOptions);
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/translate/translate.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/translate/translate.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var langPath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticAssetsUrl + "i18n/" + (lang || 'en') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/services/user/gender/gender.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/user/gender/gender.service.ts ***!
  \********************************************************/
/*! exports provided: GenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderService", function() { return GenderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var GenderService = /** @class */ (function () {
    function GenderService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + "api/";
    }
    GenderService.prototype.getGenders = function () {
        return this.http.get(this.baseUrl + "genders/");
    };
    GenderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    GenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], GenderService);
    return GenderService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//import { readCookie } from '../cookie.service';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Accept': 'application/json', 'Content-Type': 'application/json', })
        };
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        this.http.post('/api/token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            _this.updateData(data['token']);
        }, function (err) {
            _this.errors = err['error'];
        });
    };
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post('/api/token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            _this.updateData(data['token']);
        }, function (err) {
            _this.errors = err['error'];
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
        localStorage.removeItem('id_token');
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
        localStorage.setItem('id_token', this.token);
    };
    /*public registerUser(userData): Observable<any> {
        return this.http.post('/api/users/', userData, this.httpOptions);
    }*/
    UserService.prototype.registerUser = function (userData) {
        var _this = this;
        this.http.post('/api/users/', JSON.stringify(userData), this.httpOptions).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            _this.errors = err['error'];
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");


// Icons

// Layout


// Buttons & Indicators

// Popups & Modals


// UI

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
            ],
            exports: [
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var environment = {
    production: true,
    serverUrl: "https://lov3r.herokuapp.com/",
    staticAssetsUrl: "https://lov3r.herokuapp.com/static/angular/assets/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/delitamakanda/Projects/dating/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.chunk.js.map