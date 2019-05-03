(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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








var routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-container\">\n    <div class=\"language-switching\">\n        <button mat-mini-fab (click)=\"setLang('fr')\">FR</button>\n        <button mat-mini-fab (click)=\"setLang('en')\">EN</button>\n    </div>\n    <app-side-nav></app-side-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.language-switching {\n  position: fixed;\n  z-index: 2;\n  right: 1em;\n  bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYW5ndWFnZS1zd2l0Y2hpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHJpZ2h0OiAxZW07XG4gICAgYm90dG9tOiAxZW07XG59XG4iXX0= */"

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
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(translate, matIconRegistry, domSanitizer) {
        this.translate = translate;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("love", this.domSanitizer.bypassSecurityTrustResourceUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].staticAssetsUrl + "love_icon.svg"));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth/token.interceptor */ "./src/app/services/auth/token.interceptor.ts");




















// UI



// import { CookieService } from 'angular2-cookie/core';


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
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_22__["SideNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                //ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_9__["GenderService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"],
                _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]],
                    multi: true
                },
                _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_24__["TokenInterceptor"],
                _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_24__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dashboard/dashboard.service */ "./src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var _services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/translate/translate.service */ "./src/app/services/translate/translate.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(translate, dashboardService, authService, cookieService) {
        this.translate = translate;
        this.dashboardService = dashboardService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.results = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.listRelationship = this.dashboardService.list().subscribe(function (data) {
            console.log(data);
            _this.results = data.results;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.listRelationship) {
            this.listRelationship.unsubscribe();
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box flex\">\n\t<p>\n\t\t<!--<img src=\"http://localhost:4200/assets/logo-love.svg\" class=\"logo\">-->\n\t\t<mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n\t</p>\n\t<p>\n\t\t<button mat-raised-button routerLink=\"login\">{{ 'loginLabel' | translate }}</button>\n\t</p>\n\t<p>\n\t\t<button mat-raised-button routerLink=\"register\">{{ 'registerLabel' | translate }}</button>\n\t</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box.flex {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh; }\n\n.box p {\n  text-align: center; }\n\nmat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNJLGVBZk87RUFnQlAsWUFoQk87RUFpQlAsV0FqQk87RUFrQlAsaUJBbEJPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG4uYm94LmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iXX0= */"

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
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <p *ngIf='didLogin'>\n        Welcome! Get started <a [routerLink]=\"'/'\">here</a>.<br/><br/>\n    </p>\n    <p *ngIf='tokenExists'>\n    You are already logged in! Would you like to <a routerLink='/logout'>logout</a>?\n\n        </p>\n    <p>\n        <mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n    </p>\n\n    <form *ngIf='!userData && !tokenExists' [formGroup]='loginForm' #ourLoginDir='ngForm' (submit)='handleSubmit($event, ourLoginDir, loginForm)'>\n        <p *ngIf='loginErrors'>{{ loginErrors }}</p>\n        <mat-card-content>\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Username or Email\" formControlName=\"usernameField\" />\n                <div *ngIf='usernameField.invalid && (usernameField.dirty || usernameField.touched)'>\n                <mat-error *ngIf='usernameField.errors.required'>\n                  Username is required.\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.maxlength'>\n                   Max length is 280\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.minlength'>\n                  Min length is 4\n                </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"passwordField\" [type]=\"hide ? 'password' : 'text'\" />\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <div *ngIf='passwordField.invalid && (passwordField.dirty || passwordField.touched)'>\n                    <mat-error *ngIf='passwordField.errors.required'>\n                        Password is required.\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.maxlength'>\n                        Max length is 280\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.minlength'>\n                        Min length is 4\n                    </mat-error>\n                </div>\n            </mat-form-field>\n        </mat-card-content>\n        <br />\n        <mat-card-actions>\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">{{ 'loginLabel' | translate }}</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"ourLoginDir.resetForm({})\">{{ 'resetLabel' | translate }}</button>\n        </mat-card-actions>\n    </form>\n\n\t<p>\n\t\t<button mat-raised-button routerLink='/register'>{{ 'registerLabel' | translate }}</button>\n\t</p>\n    <!--<mat-form-field>\n      <input type=\"email\" matInput placeholder=\"Username or Email\" [(ngModel)]=\"user.emailOrUsername\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address or username\n      </mat-error>\n      <mat-error *ngFor=\"let error of userService.errors.username\">{{ error }}</mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>-->\n\n  <!--<mat-form-field>\n    <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"user.password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    <mat-error *ngFor=\"let error of userService.errors.password\">{{ error }}</mat-error>\n  </mat-form-field>-->\n\n  <!--<button (click)=\"signin()\" mat-raised-button>Login</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUhPO0VBSVAsWUFKTztFQUtQLFdBTE87RUFNUCxpQkFOTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iXX0= */"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







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
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>\n        <button mat-raised-button routerLink=\"/login\">{{ 'loginLabel' | translate }}</button>\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */"

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
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/components/logout/logout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navigation-toolbar\">\n\n  <mat-toolbar-row>\n\n    <button mat-icon-button (click)=\"toggleSidenav.emit()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <span class=\"toolbar-title\"> {{ 'title' | translate }} </span>\n\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n\n      <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n\n        <li fxHide.xs>\n          <button mat-icon-button>\n            <mat-icon>settings</mat-icon>\n          </button>\n        </li>\n\n        <li fxHide.xs>\n          <button mat-icon-button>\n            <mat-icon>help_outline</mat-icon>\n          </button>\n        </li>\n\n        <li>\n          <button mat-icon-button [matMenuTriggerFor]=\"auth\">\n            <mat-icon>person_outline</mat-icon>\n          </button>\n          <mat-menu #auth=\"matMenu\">\n            <button mat-menu-item (click)=\"logout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>{{ 'LOGOUT' | translate }}</span>\n            </button>\n          </mat-menu>\n        </li>\n\n      </ul>\n\n    </div>\n\n  </mat-toolbar-row>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title {\n  margin: 0 16px 0 16px; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.navigation-toolbar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFIMEIsRUFBQTs7QUFNNUI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9vbGJhci10aXRsZS1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuXG4udG9vbGJhci10aXRsZSB7XG4gIG1hcmdpbjogMCAkdG9vbGJhci10aXRsZS1wYWRkaW5nIDAgJHRvb2xiYXItdGl0bGUtcGFkZGluZztcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmlnYXRpb24tdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDM7XG59XG4iXX0= */"

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
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/components/navigation-bar/navigation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>\n        <mat-icon svgIcon=\"love\" aria-hidden=\"false\"></mat-icon>\n    </p>\n    <form [formGroup]=\"registerForm\" #ourRegisterDir='ngForm' (submit)=\"handleSubmit($event, ourRegisterDir, registerForm)\">\n        <p *ngIf='loginErrors'>{{ loginErrors.email }}</p>\n        <p *ngIf='loginErrors'>{{ loginErrors.username }}</p>\n\n        <mat-card-content>\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"usernameField\" />\n                <div *ngIf='usernameField.invalid && (usernameField.dirty || usernameField.touched)'>\n                <mat-error *ngIf='usernameField.errors.required'>\n                  Username is required.\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.maxlength'>\n                   Max length is 280\n                </mat-error>\n                <mat-error *ngIf='usernameField.errors.minlength'>\n                  Min length is 4\n                </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"emailField\" />\n                <div *ngIf='emailField.invalid && (emailField.dirty || emailField.touched)'>\n                <mat-error *ngIf='emailField.errors.required'>\n                  Username is required.\n                </mat-error>\n                <mat-error *ngIf='emailField.errors.maxlength'>\n                   Max length is 280\n                </mat-error>\n                <mat-error *ngIf='emailField.errors.minlength'>\n                  Min length is 4\n                </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"passwordField\" [type]=\"hide ? 'password' : 'text'\" />\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <div *ngIf='passwordField.invalid && (passwordField.dirty || passwordField.touched)'>\n                    <mat-error *ngIf='passwordField.errors.required'>\n                        Password is required.\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.maxlength'>\n                        Max length is 280\n                    </mat-error>\n                    <mat-error *ngIf='passwordField.errors.minlength'>\n                        Min length is 4\n                    </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Confirm password\" formControlName=\"passwordFieldVerification\" [type]=\"hide ? 'password' : 'text'\" />\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <div *ngIf='passwordFieldVerification.invalid && (passwordFieldVerification.dirty || passwordFieldVerification.touched)'>\n                    <mat-error *ngIf='passwordFieldVerification.errors.required'>\n                        Password is required.\n                    </mat-error>\n                    <mat-error *ngIf='passwordFieldVerification.errors.maxlength'>\n                        Max length is 280\n                    </mat-error>\n                    <mat-error *ngIf='passwordFieldVerification.errors.minlength'>\n                        Min length is 4\n                    </mat-error>\n                </div>\n            </mat-form-field>\n\n            <div>\n                <mat-radio-group aria-label=\"Select an option\" formControlName=\"genderField\" class=\"radio-group\">\n                  <mat-radio-button class=\"radio-button\" *ngFor=\"let gender of listResultGenders\" [value]=\"gender.id\">{{ gender.name }}</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </mat-card-content>\n        <br />\n        <mat-card-actions>\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"registerForm.invalid\">{{ 'registerLabel' | translate }}</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"ourRegisterDir.resetForm({})\">{{ 'resetLabel' | translate }}</button>\n        </mat-card-actions>\n    </form>\n    <p>\n\t\t<button mat-raised-button routerLink='/login'>{{ 'loginLabel' | translate }}</button>\n\t</p>\n\n    <!--<mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Username\" [(ngModel)]=\"register.username\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"register.password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"register.email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n        <mat-hint>Errors appear instantly!</mat-hint>\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <button (click)=\"createAccount()\" mat-raised-button>Register</button>-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  font-size: 60px;\n  height: 60px;\n  width: 60px;\n  line-height: 60px; }\n\n.radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0; }\n\n.radio-button {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxpdGFtYWthbmRhL1Byb2plY3RzL2RhdGluZy9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUhPO0VBSVAsWUFKTztFQUtQLFdBTE87RUFNUCxpQkFOTyxFQUFBOztBQVVYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaXplOiA2MHB4O1xuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG59XG5cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"

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
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_user_gender_gender_service__WEBPACK_IMPORTED_MODULE_6__["GenderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"over\">\n\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <h2 class=\"toolbar-title\"> {{ 'title' | translate }} </h2>\n      </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-nav-list>\n\n      <h2 matSubheader> {{ 'MYWORK' | translate }} </h2>\n\n      <a mat-list-item routerLink=\"/\" style=\"height: 0;\"></a>\n\n      <a *ngFor=\"let item of myWorkRoutes\"\n         mat-list-item\n         (click)=\"sidenav.close()\"\n         routerLinkActive\n         #routerLinkActiveInstance=\"routerLinkActive\"\n         [class.list-item-active]=\"routerLinkActiveInstance.isActive\"\n         [routerLink]=\"[item.route]\">\n        <mat-icon matListIcon class=\"app-nav-list-icon\"> {{ item.icon }} </mat-icon>\n        {{item.title}}\n      </a>\n\n      <mat-divider></mat-divider>\n\n      <h2 matSubheader> {{ 'CUSTOMERS' | translate }} </h2>\n\n      <a *ngFor=\"let item of customerRoutes\"\n         mat-list-item\n         (click)=\"sidenav.close()\"\n         routerLinkActive\n         #routerLinkActiveInstance=\"routerLinkActive\"\n         [class.list-item-active]=\"routerLinkActiveInstance.isActive\"\n         [routerLink]=\"[item.route]\">\n        <mat-icon matListIcon class=\"app-nav-list-icon\"> {{ item.icon }} </mat-icon>\n        {{item.title}}\n      </a>\n\n    </mat-nav-list>\n\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n      <app-navigation-bar *ngIf=\"isAuthenticated()\" (toggleSidenav)=\"sidenav.toggle()\"></app-navigation-bar>\n      <router-outlet></router-outlet>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MifQ== */"

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
                route: 'sales/activities',
                title: 'Activities',
            }, {
                icon: 'dashboard',
                route: 'sales/dashboards',
                title: 'Dashboards',
            }
        ];
        this.customerRoutes = [
            {
                icon: 'contacts',
                route: 'sales/accounts',
                title: 'Accounts',
            }, {
                icon: 'people',
                route: 'sales/contacts',
                title: 'Contacts',
            }, {
                icon: 'settings_phone',
                route: 'sales/leads',
                title: 'Leads',
            }, {
                icon: 'account_box',
                route: 'sales/opportunities',
                title: 'Opportunities',
            }
        ];
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.isAuthenticated = function () {
        return this.authService.checkToken();
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/components/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SideNavComponent);
    return SideNavComponent;
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");





var DashboardService = /** @class */ (function () {
    function DashboardService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "api/";
    }
    DashboardService.prototype.createHeaders = function (token) {
        var data = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
    DashboardService.prototype.list = function () {
        var apiListEndpoint = this.baseUrl + "messages/";
        return this.http.get(apiListEndpoint);
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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