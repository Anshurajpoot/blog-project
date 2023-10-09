(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function AdminComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminComponent_div_0_div_9_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onResetPasswordSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Old Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_div_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.oldPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_div_9_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.cancelResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.oldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newPassword);
} }
function AdminComponent_div_0_ng_container_22_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminComponent_div_0_ng_container_22_tr_13_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.performUpdate(user_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_ng_container_22_tr_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_ng_container_22_tr_13_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_ng_container_22_tr_13_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_0_ng_container_22_tr_13_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.roles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_ng_container_22_tr_13_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.cancelUpdate(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.roles);
} }
function AdminComponent_div_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_ng_container_22_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const user_r8 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.performDelete(user_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_ng_container_22_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const user_r8 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.performUpdate(user_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminComponent_div_0_ng_container_22_tr_13_Template, 19, 4, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r8.isEditing);
} }
function AdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, Admin!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is the admin dashboard.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.showPasswordResetForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_div_0_div_9_Template, 14, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdminComponent_div_0_ng_container_22_Template, 14, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPasswordResetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
class AdminComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.showPasswordResetForm = false;
    }
    ngOnInit() {
        this.roles = localStorage.getItem('role');
        if (!this.roles) {
            this.router.navigate(['/login']);
            return;
        }
        if (this.roles !== 'admin') {
            alert('Checking credentials admin');
            this.router.navigate(['/unauthorisied']);
            return;
        }
        this.apiService.getusers().subscribe((response) => {
            this.users = response;
        }, (error) => {
            console.error(error);
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.email = this.user['email'];
    }
    performDelete(id) {
        this.apiService.deleteUser(id).subscribe(() => {
            console.log('User deleted successfully');
        }, (error) => {
            console.error('Failed to delete user:', error);
        });
    }
    performUpdate(id) {
        const user = this.users.find(u => u.id === id);
        if (!user)
            return;
        user.isEditing = true; // Enable editing mode
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            roles: user.roles
        };
        this.apiService.updateUser(id, userData).subscribe((response) => {
            console.log('User updated successfully');
        }, (error) => {
            console.error('Failed to update user:', error);
        });
    }
    cancelUpdate(user) {
        user.isEditing = false; // Disable editing mode
    }
    onResetPassword() {
        this.showPasswordResetForm = true;
    }
    cancelResetPassword() {
        this.showPasswordResetForm = false;
        this.oldPassword = '';
        this.newPassword = '';
    }
    onResetPasswordSubmit() {
        this.apiService.resetP(this.email, this.oldPassword, this.newPassword).subscribe(() => {
            this.showAlert('success', 'Password reset successfully');
            this.cancelResetPassword();
        }, (error) => {
            console.error(error);
            this.showAlert('error', 'Failed to reset password');
        });
    }
    showAlert(type, message) {
        if (type === 'success') {
            alert(message);
        }
        else if (type === 'error') {
            alert(message);
        }
        else {
            console.warn('Unsupported alert type:', type);
        }
    }
    logout() {
        this.apiService.logout().subscribe((response) => {
            // Clear the token, role, and user from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('user');
            console.log('Logged out successfully');
            // Get the expiration time from the response
            const expirationTime = response.expirationTime;
            // Use the expiration time if needed
            console.log(`Token expired at: ${new Date(expirationTime)}`);
            sessionStorage.clear();
            this.router.navigate(['/posts']);
        }, (error) => {
            console.error('Logout failed:', error);
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], [3, "submit"], ["for", "oldPassword"], ["type", "password", "id", "oldPassword", "name", "oldPassword", "required", "", 3, "ngModel", "ngModelChange"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["type", "button", 3, "click"], ["colspan", "4"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["for", "roles"], ["type", "text", "id", "roles", "name", "roles", "required", "", 3, "ngModel", "ngModelChange"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 23, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roles === "admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".admin-dashboard[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #f5f5f5;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.admin-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: #008080; \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.admin-description[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #333; \r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: left;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #008080; \r\n  color: #fff; \r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%], .update-button[_ngcontent-%COMP%] {\r\n  background-color: #ff6347; \r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFFLG9CQUFvQjtFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFFLG9CQUFvQjtBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLG9CQUFvQjtFQUMvQyxXQUFXLEVBQUUsZ0JBQWdCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsaUJBQWlCO0VBQzVDLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tZGFzaGJvYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uYWRtaW4tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzAwODA4MDsgLyogRGFyayBDeWFuIGNvbG9yICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmFkbWluLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7IC8qIERhcmsgZ3JheSBjb2xvciAqL1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDsgLyogRGFyayBDeWFuIGNvbG9yICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIGNvbG9yICovXHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24sIC51cGRhdGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzQ3OyAvKiBUb21hdG8gY29sb3IgKi9cclxuICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:4000';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.token = localStorage.getItem('token');
        this.httpTokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${this.token}`);
    }
    fetchCommentsForPosts(postId) {
        throw new Error('Method not implemented.');
    }
    // createUser(role: any): Observable<any> {
    //   const url = `${this.baseUrl}/createusers`;
    //   return this.http.post(url, role, { headers: this.httpHeaders });
    // }
    createUser(data) {
        const url = `${this.baseUrl}/createusers`;
        const headers = this.getAuthHeaders().set('Content-Type', 'application/json');
        return this.http.post(url, data, { headers });
    }
    // resetPasswordd(userId: string) {
    //   return this.http.post<any>(`${this.baseUrl}/forget-password`, { userId });
    // }
    resetP(email, oldPassword, newPassword) {
        const resetData = { email, oldPassword, newPassword };
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        return this.http.post('http://localhost:4000/reset-passwordd', resetData, { headers });
    }
    getusers() {
        const url = `${this.baseUrl}/getusers`;
        return this.http.get(url);
    }
    login(email, password) {
        const url = `${this.baseUrl}/login`;
        return this.http.post(url, { email, password });
    }
    deleteUser(id) {
        const url = `${this.baseUrl}/deleteUsers/${id}`;
        const headers = this.getAuthHeaders();
        return this.http.delete(url, { headers });
    }
    updateUser(id, userData) {
        const url = `${this.baseUrl}/updateUsers/${id}`;
        const headers = this.getAuthHeaders();
        return this.http.put(url, userData, { headers });
    }
    getUser() {
        const url = `${this.baseUrl}/getuser`;
        const headers = this.getAuthHeaders();
        return this.http.get(url, { headers });
    }
    updateUserss(id, name) {
        const url = `${this.baseUrl}/updateUser`;
        const data = { id: id, name: name };
        return this.http.put(url, data);
    }
    getAuthHeaders() {
        const token = localStorage.getItem('token');
        const headers = this.httpHeaders;
        if (token) {
            return headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
    logout() {
        const url = `${this.baseUrl}/logout`;
        const headers = this.getAuthHeaders();
        return this.http.post(url, null, { headers });
    }
    createComment(content, postid) {
        const url = `${this.baseUrl}/createcomment`;
        const body = { content, postid };
        const headers = this.getAuthHeaders();
        return this.http.post(url, body, { headers });
    }
    getComments() {
        const url = `${this.baseUrl}/getcomments`;
        return this.http.get(url);
    }
    getCommentUserName(commentUsers, userId) {
        const commentUser = commentUsers.find(user => user.id === userId);
        return commentUser ? commentUser.name : 'Unknown';
    }
    getCommentUsers(commentIds) {
        const url = `${this.baseUrl}/getcommentusers`;
        return this.http.post(url, { commentIds }, { headers: this.httpHeaders });
    }
    createPost(data) {
        const url = `${this.baseUrl}/createpost`;
        const headers = this.getAuthHeaders().set('Content-Type', 'application/json');
        return this.http.post(url, data, { headers });
    }
    getPosts() {
        const url = `${this.baseUrl}/getposts`;
        return this.http.get(url);
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }
    publicComment(content, postId) {
        const url = `${this.baseUrl}/publicComment`;
        const userId = 100;
        const obj = { content, postId, userId };
        const headers = this.getAuthHeaders();
        return this.http.post(url, obj, { headers });
    }
    getcomments() {
        const url = `${this.baseUrl}/getcomments`;
        return this.http.get(url);
    }
    getUserStats(userId) {
        const url = `${this.baseUrl}/user/${userId}/stats`;
        const headers = this.getAuthHeaders();
        return this.http.get(url, { headers });
    }
    sendOTPByEmail(email) {
        const url = `${this.baseUrl}/forgot-password`;
        const data = { email };
        return this.http.post(url, data, { headers: this.httpHeaders });
    }
    // API call for resetting the password
    resetPassword(email, otp, newPassword) {
        const url = `${this.baseUrl}/reset-password`;
        const data = { email, otp, newPassword };
        return this.http.post(url, data, { headers: this.httpHeaders });
    }
    sendFollowRequest(targetUserId, requesterId) {
        const url = `${this.baseUrl}/follow-request`;
        const data = { targetUserId, requesterId };
        // console.log(data, 'apiservicedata')
        const headers = this.getAuthHeaders();
        return this.http.post(url, data, { headers: this.httpHeaders });
    }
    getFollowRequestStatus(requesterId, targetId) {
        const url = `${this.baseUrl}/follow-status`;
        const params = { requesterId: String(requesterId), targetId: String(targetId) };
        const headers = this.getAuthHeaders();
        return this.http.get(url, { headers, params });
    }
    getfollowrequestuserdata() {
        const url = `${this.baseUrl}/follow-requestsdata`;
        return this.http.get(url);
    }
    getFollowRequests(requesterId) {
        const url = `${this.baseUrl}/follow-requests/${requesterId}`;
        return this.http.get(url);
    }
    updateFollowRequestStatus(requestId, status) {
        const url = `${this.baseUrl}/follow-requests-status/${requestId}`;
        const data = { status };
        const headers = this.getAuthHeaders();
        return this.http.put(url, data, { headers });
    }
    getCombinedData() {
        const url = `${this.baseUrl}/combined-data`;
        return this.http.get(url);
    }
    getPostHeaders() {
        const url = `${this.baseUrl}/post-headers`;
        return this.http.get(url, { headers: this.getAuthHeaders() });
    }
    checkTokenExpiration() {
        const url = `${this.baseUrl}/check-token-expiration`;
        return this.http.get(url, { headers: this.getAuthHeaders() });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supervisior/supervisior.component */ "./src/app/supervisior/supervisior.component.ts");
/* harmony import */ var _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unauthorised/unauthorised.component */ "./src/app/unauthorised/unauthorised.component.ts");
/* harmony import */ var _createcomment_createcomment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createcomment/createcomment.component */ "./src/app/createcomment/createcomment.component.ts");
/* harmony import */ var _journey_report_journey_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./journey-report/journey-report.component */ "./src/app/journey-report/journey-report.component.ts");
/* harmony import */ var _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public-page/public-page.component */ "./src/app/public-page/public-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _header_detail_header_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-detail/header-detail.component */ "./src/app/header-detail/header-detail.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
















const routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'header', component: _header_detail_header_detail_component__WEBPACK_IMPORTED_MODULE_12__["HeaderDetailComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'basic', component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_5__["BasicComponent"] },
    { path: 'supervisior', component: _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_6__["SupervisiorComponent"] },
    { path: 'unauthorisied', component: _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorisedComponent"] },
    { path: 'comments/:postId', component: _createcomment_createcomment_component__WEBPACK_IMPORTED_MODULE_8__["CreatecommentComponent"] },
    { path: 'report', component: _journey_report_journey_report_component__WEBPACK_IMPORTED_MODULE_9__["JourneyReportComponent"] },
    { path: 'posts', component: _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_10__["PublicPageComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"] },
    { path: 'post/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"] }
    // { path: 'reset-password', component: ResetPasswordComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.sessionKey = 'myAppSession';
    }
    ngOnInit() { }
    onSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            password: this.password,
            roles: this.roles,
            file: this.file.name,
        };
        this.apiService.createUser(user).subscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supervisior/supervisior.component */ "./src/app/supervisior/supervisior.component.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./unauthorised/unauthorised.component */ "./src/app/unauthorised/unauthorised.component.ts");
/* harmony import */ var _createcomment_createcomment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createcomment/createcomment.component */ "./src/app/createcomment/createcomment.component.ts");
/* harmony import */ var _journey_report_journey_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./journey-report/journey-report.component */ "./src/app/journey-report/journey-report.component.ts");
/* harmony import */ var _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./public-page/public-page.component */ "./src/app/public-page/public-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _header_detail_header_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header-detail/header-detail.component */ "./src/app/header-detail/header-detail.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");


























// import { NgxSpinnerModule } from 'ngx-spinner';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_10__["SupervisiorComponent"],
        _basic_basic_component__WEBPACK_IMPORTED_MODULE_11__["BasicComponent"],
        _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_13__["UnauthorisedComponent"],
        _createcomment_createcomment_component__WEBPACK_IMPORTED_MODULE_14__["CreatecommentComponent"],
        _journey_report_journey_report_component__WEBPACK_IMPORTED_MODULE_15__["JourneyReportComponent"],
        _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_16__["PublicPageComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"],
        _header_detail_header_detail_component__WEBPACK_IMPORTED_MODULE_22__["HeaderDetailComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]], exports: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                    _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_10__["SupervisiorComponent"],
                    _basic_basic_component__WEBPACK_IMPORTED_MODULE_11__["BasicComponent"],
                    _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_13__["UnauthorisedComponent"],
                    _createcomment_createcomment_component__WEBPACK_IMPORTED_MODULE_14__["CreatecommentComponent"],
                    _journey_report_journey_report_component__WEBPACK_IMPORTED_MODULE_15__["JourneyReportComponent"],
                    _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_16__["PublicPageComponent"],
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"],
                    _header_detail_header_detail_component__WEBPACK_IMPORTED_MODULE_22__["HeaderDetailComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                exports: [
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                ],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function BasicComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BasicComponent_div_11_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onResetPasswordSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Old Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicComponent_div_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.oldPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicComponent_div_11_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_div_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.oldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newPassword);
} }
class BasicComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.showPasswordResetForm = false;
    }
    ngOnInit() {
        this.roles = localStorage.getItem('role');
        if (!this.roles) {
            this.router.navigate(['/login']);
        }
        this.user = JSON.parse(localStorage.getItem('user'));
        this.email = this.user['email'];
    }
    onResetPassword() {
        this.showPasswordResetForm = true;
    }
    cancelResetPassword() {
        this.showPasswordResetForm = false;
        this.oldPassword = '';
        this.newPassword = '';
    }
    onResetPasswordSubmit() {
        this.apiService.resetP(this.email, this.oldPassword, this.newPassword).subscribe(() => {
            this.showAlert('success', 'Password reset successfully');
            this.cancelResetPassword();
        }, (error) => {
            console.error(error);
            this.showAlert('error', 'Failed to reset password');
        });
    }
    showAlert(type, message) {
        if (type === 'success') {
            alert(message);
        }
        else if (type === 'error') {
            alert(message);
        }
        else {
            console.warn('Unsupported alert type:', type);
        }
    }
    logout() {
        this.apiService.logout().subscribe((response) => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('user');
            console.log('Logged out successfully');
            const expirationTime = response.expirationTime;
            this.router.navigate(['/posts']);
        }, (error) => {
            console.error('Logout failed:', error);
        });
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], decls: 12, vars: 1, consts: [[1, "dashboard"], [1, "btn", "logout-button", "red-button", 3, "click"], [3, "click"], [4, "ngIf"], [3, "submit"], ["for", "oldPassword"], ["type", "password", "id", "oldPassword", "name", "oldPassword", "required", "", 3, "ngModel", "ngModelChange"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["type", "button", 3, "click"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, Basic!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is the basic dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You have no rights to perform any action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_7_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_9_listener() { return ctx.showPasswordResetForm = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BasicComponent_div_11_Template, 14, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPasswordResetForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".dashboard[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: #ff8c00; \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.dashboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #333; \r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n  color: red;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFFLGlCQUFpQjtFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFFLG9CQUFvQjtBQUNuQzs7QUFDQTtFQUNFLFVBQVU7RUFDVixnREFBZ0Q7QUFDbEQiLCJmaWxlIjoic3JjL2FwcC9iYXNpYy9iYXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmRhc2hib2FyZCBoMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjZmY4YzAwOyAvKiBPcmFuZ2UgY29sb3IgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMzMzsgLyogRGFyayBncmF5IGNvbG9yICovXHJcbn1cclxuLnJlZC1idXR0b24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgLyogQWRkIGFueSBvdGhlciBkZXNpcmVkIHN0eWxlcyBmb3IgdGhlIGJ1dHRvbiAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/createcomment/createcomment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createcomment/createcomment.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatecommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecommentComponent", function() { return CreatecommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class CreatecommentComponent {
    constructor(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.postid = params['postid'];
        });
        const userItem = localStorage.getItem('user');
        if (userItem) {
            this.userId = JSON.parse(userItem).id;
        }
    }
    submitComment() {
        if (this.content) {
            this.apiService.createComment(this.content, this.postid).subscribe(response => {
                console.log('Response:', response);
                alert('Comment saved successfully');
                this.router.navigate(['/posts']);
            }, error => {
                console.error('Error:', error);
            });
        }
        else {
            console.log('Content is required.');
        }
    }
}
CreatecommentComponent.ɵfac = function CreatecommentComponent_Factory(t) { return new (t || CreatecommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatecommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatecommentComponent, selectors: [["app-createcomment"]], decls: 8, vars: 1, consts: [["for", "content"], ["id", "content", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function CreatecommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Comment Content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatecommentComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatecommentComponent_Template_button_click_6_listener() { return ctx.submitComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%], input[type=\"number\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 8px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n\r\n\r\n.label-color[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n.input-color[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n\r\n.submit-button-color[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n}\r\n\r\n.submit-button-color[_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 150px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlY29tbWVudC9jcmVhdGVjb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlY29tbWVudC9jcmVhdGVjb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxudGV4dGFyZWEsXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4vKiBDdXN0b20gQ29sb3JzICovXHJcbi5sYWJlbC1jb2xvciB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5pbnB1dC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbi1jb2xvcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatecommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createcomment',
                templateUrl: './createcomment.component.html',
                styleUrls: ['./createcomment.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ForgotPasswordComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ngOnInit() {
    }
    sendOTP() {
        document.getElementById('main_loader').style.display = "block";
        if (!this.email) {
            alert('Please provide a valid email ID.');
            document.getElementById('main_loader').style.display = "none"; // Stop the spinner
            return;
        }
        this.apiService.sendOTPByEmail(this.email).subscribe((response) => {
            console.log('OTP sent successfully:', response);
            document.getElementById('main_loader').style.display = "none"; // Stop the spinner
            document.getElementById('showMessage').style.display = "block";
            setTimeout(() => {
                document.getElementById('showMessage').style.display = "none";
            }, 3000);
            this.otp = this.otp;
        }, (error) => {
            console.error('Failed to send OTP:', error);
            document.getElementById('main_loader').style.display = "none"; // Stop the spinner
        });
    }
    resetPassword() {
        if (!this.email || !this.otp || !this.newPassword) {
            alert('Please fill all the required fields');
            return;
        }
        this.apiService.resetPassword(this.email, this.otp, this.newPassword).subscribe((response) => {
            console.log('Password reset successful:', response);
            alert('Password reset successful');
            this.email = '';
            this.otp = '';
            this.newPassword = '';
        }, (error) => {
            console.error('Failed to reset password:', error);
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 28, vars: 3, consts: [["id", "main_loader", 2, "display", "none"], [1, "loader-wrapper"], [1, "lds-roller"], [1, "login-page"], [1, "form-container"], [1, "ansh", 2, "padding-top", "10px"], ["for", "emailInput"], [1, "forgot-password-form"], ["type", "email", "id", "emailInput", "placeholder", "Enter your email", 2, "margin-bottom", "20px", "width", "100%", 3, "ngModel", "ngModelChange"], ["id", "showMessage", 2, "display", "none"], [3, "click"], ["type", "text", "placeholder", "Enter OTP", 2, "margin-top", "20px", "width", "100%", "border-radius", "4px", "border", "1px solid #ccc", "padding", "8px", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Enter new password", 2, "margin-top", "20px", "margin-bottom", "20px", "width", "100%", 3, "ngModel", "ngModelChange"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Forgot-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_18_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "OTP sent successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_21_listener() { return ctx.sendOTP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_24_listener($event) { return ctx.otp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_25_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_26_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f0f0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n  \r\n\r\n\r\n  \r\n.form-container[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n  \r\n.form-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n  \r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  \r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n  \r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n \r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n  \r\n.error-message[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n}\r\n\r\n  \r\n.form-button[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n  \r\n.form-button[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n  \r\n.custom-file[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  \r\n.custom-file-input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n  \r\n.login-page[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n \r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #007bff;\r\n}\r\n\r\n  \r\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n  \r\n.forgot-password-form[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  \r\n.forgot-password-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: calc(100% - 80px);\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin-right: 10px;\r\n}\r\n\r\n  \r\n.forgot-password-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 8px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n  \r\n.forgot-password-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  background: rgba(255, 255, 255, .87);\r\n  z-index: 999;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .loader-wrapper[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  height: 70px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  position: absolute;\r\n  margin: auto;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  animation: lds-roller-main 1.2s cubic-bezier(.5, 0, .5, 1) infinite;\r\n  transform-origin: 32px 32px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background: #ED1B24;\r\n  margin: -3px 0 0 -3px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation-delay: -36ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\r\n  top: 50px;\r\n  left: 50px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation-delay: -72ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\r\n  top: 54px;\r\n  left: 45px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation-delay: -108ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\r\n  top: 57px;\r\n  left: 39px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  animation-delay: -144ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\r\n  top: 58px;\r\n  left: 32px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n  animation-delay: -.18s;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\r\n  top: 57px;\r\n  left: 25px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n  animation-delay: -216ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\r\n  top: 54px;\r\n  left: 19px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n  animation-delay: -252ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\r\n  top: 50px;\r\n  left: 14px;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n  animation-delay: -288ms;\r\n}\r\n\r\n  \r\n#main_loader[_ngcontent-%COMP%]   .lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\r\n  top: 45px;\r\n  left: 10px;\r\n}\r\n\r\n  \r\n@keyframes lds-roller-main {\r\n  0% {\r\n      transform: rotate(0);\r\n  }\r\n  100% {\r\n      transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzREs7OztBQUdMO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQSxtQkFBbUI7OztBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCOzs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7OztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUNBO0VBQ0UsbUVBQW1FO0VBQ25FLDJCQUEyQjtBQUM3Qjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFDQTtFQUNFO01BQ0ksb0JBQW9CO0VBQ3hCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sb2dpbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgd2lkdGg6IDUwJTsgXHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4OyBcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZjYzsgXHJcbiAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTk7IFxyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSAqL1xyXG5cclxuICBcclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qIEZvcm0gQ29udGFpbmVyICovXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0LFxyXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xyXG4gXHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjZDMyZjJmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbixcclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b246aG92ZXIsXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWZpbGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuXHJcblxyXG4jbWFpbl9sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg3KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sb2FkZXItd3JhcHBlciB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyLW1haW4gMS4ycyBjdWJpYy1iZXppZXIoLjUsIDAsIC41LCAxKSBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNFRDFCMjQ7XHJcbiAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0zNm1zO1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICB0b3A6IDUwcHg7XHJcbiAgbGVmdDogNTBweDtcclxufVxyXG4jbWFpbl9sb2FkZXIgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNzJtcztcclxufVxyXG4jbWFpbl9sb2FkZXIgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgdG9wOiA1NHB4O1xyXG4gIGxlZnQ6IDQ1cHg7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEwOG1zO1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICB0b3A6IDU3cHg7XHJcbiAgbGVmdDogMzlweDtcclxufVxyXG4jbWFpbl9sb2FkZXIgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMTQ0bXM7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gIHRvcDogNThweDtcclxuICBsZWZ0OiAzMnB4O1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0uMThzO1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuICB0b3A6IDU3cHg7XHJcbiAgbGVmdDogMjVweDtcclxufVxyXG4jbWFpbl9sb2FkZXIgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMjE2bXM7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gIHRvcDogNTRweDtcclxuICBsZWZ0OiAxOXB4O1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0yNTJtcztcclxufVxyXG4jbWFpbl9sb2FkZXIgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGxlZnQ6IDE0cHg7XHJcbn1cclxuI21haW5fbG9hZGVyIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTI4OG1zO1xyXG59XHJcbiNtYWluX2xvYWRlciAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXItbWFpbiB7XHJcbiAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header-detail/header-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/header-detail/header-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDetailComponent", function() { return HeaderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderDetailComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.header = params['header'];
        });
    }
}
HeaderDetailComponent.ɵfac = function HeaderDetailComponent_Factory(t) { return new (t || HeaderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeaderDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderDetailComponent, selectors: [["app-header-detail"]], decls: 2, vars: 0, template: function HeaderDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1kZXRhaWwvaGVhZGVyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-detail',
                templateUrl: './header-detail.component.html',
                styleUrls: ['./header-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomeComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.roles);
} }
class HomeComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.getusers().subscribe((response) => {
            this.roles = response.map((user) => user.roles);
            console.log(this.roles);
        }, (error) => {
            console.error(error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 1, consts: [[1, "container"], ["id", "", 1, "table"], [4, "ngFor", "ngForOf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_tr_15_Template, 11, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/journey-report/journey-report.component.ts":
/*!************************************************************!*\
  !*** ./src/app/journey-report/journey-report.component.ts ***!
  \************************************************************/
/*! exports provided: JourneyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyReportComponent", function() { return JourneyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class JourneyReportComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.content = '';
        this.header = '';
        this.selectedFile = null;
        this.isUserValid = true;
    }
    ngOnInit() {
        const userItem = localStorage.getItem('user');
        if (userItem) {
            this.userId = JSON.parse(userItem).id;
        }
        else {
            this.isUserValid = false;
        }
    }
    createPost() {
        if (!this.isUserValid) {
            console.log('Invalid user');
            return;
        }
        let obj = {
            'content': this.content,
            'header': this.header,
            'file': this.file.name,
            'userId': this.userId
        };
        this.apiService.createPost(obj).subscribe((response) => {
            console.log('Post created successfully', response);
            alert('Post created successfully');
            this.router.navigate(['/posts']);
        }, (error) => {
            console.error('Error creating post', error);
        });
    }
    onFileSelected(event) {
        const inputElement = event.target;
        if (inputElement.files && inputElement.files.length > 0) {
            this.file = inputElement.files[0];
            console.log('53535', this.file);
        }
    }
}
JourneyReportComponent.ɵfac = function JourneyReportComponent_Factory(t) { return new (t || JourneyReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
JourneyReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JourneyReportComponent, selectors: [["app-journey-report"]], decls: 7, vars: 2, consts: [["type", "text", "placeholder", "Post Header", 3, "ngModel", "ngModelChange"], ["placeholder", "Post Content", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "user_file", 3, "change"], [3, "click"]], template: function JourneyReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JourneyReportComponent_Template_input_ngModelChange_2_listener($event) { return ctx.header = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JourneyReportComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JourneyReportComponent_Template_input_change_4_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JourneyReportComponent_Template_button_click_5_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\n[_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: #999;\r\n}\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #999;\r\n}\r\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: #999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS1yZXBvcnQvam91cm5leS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBLCtCQUErQjtBQUMvQjs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWE7QUFDZjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuZXktcmVwb3J0L2pvdXJuZXktcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBmb3IgdGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxudGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogU3R5bGUgZm9yIHRoZSBidXR0b24gKi9cclxuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgdGhlIGZpbGUgaW5wdXQgKi9cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGZvciB0aGUgaGVhZGluZyAqL1xyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGZvciB0aGUgdGV4dGFyZWEgKi9cclxudGV4dGFyZWEge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGZvciB0aGUgcGxhY2Vob2xkZXIgdGV4dCAqL1xyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JourneyReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-journey-report',
                templateUrl: './journey-report.component.html',
                styleUrls: ['./journey-report.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.showPasswordResetForm = false;
        this.forgotPasswordForm = false;
    }
    onLogin() {
        this.apiService.login(this.email, this.password).subscribe((response) => {
            const token = response.token;
            if (token) {
                localStorage.setItem('token', token);
                this.redirectToDashboard();
            }
            else {
                console.error('Token not found in the response:', response);
            }
        }, (error) => {
            console.error(error);
            this.showAlert('error', 'Invalid email or password');
        });
    }
    showAlert(type, message) {
        if (type === 'success') {
            alert(message);
        }
        else if (type === 'error') {
            alert(message);
        }
        else {
            console.warn('Unsupported alert type:', type);
        }
    }
    redirectToDashboard() {
        this.apiService.getUser().subscribe((response) => {
            console.log('sjsjsjsjsj ', response);
            const user = response.data;
            localStorage.setItem('user', JSON.stringify(user));
            const roles = user.roles;
            if (roles) {
                localStorage.setItem('role', roles);
                this.redirectBasedOnRole(roles);
            }
            else {
                console.error('Role not found in the user details:', user);
            }
        }, (error) => {
            console.error('Failed to fetch user:', error);
            this.showAlert('error', 'Failed to fetch user details');
        });
    }
    // onResetPassword() {
    //   this.router.navigate(['/reset-password']);
    // }
    // onResetPasswordd() {
    //   this.apiService.resetPasswordd(this.email).subscribe(
    //     (response) => {
    //       this.showAlert('success', response.message);
    //     },
    //     (error) => {
    //       console.error('Password reset failed:', error);
    //       this.showAlert('error', 'Failed to reset password');
    //     }
    //   );
    // }
    navigateToForgotPassword() {
        this.router.navigate(['/forgot-password']);
    }
    redirectBasedOnRole(role) {
        if (role === 'admin') {
            this.router.navigate(['/admin']);
        }
        else if (role === 'basic') {
            this.router.navigate(['/basic']);
        }
        else if (role === 'supervisior') {
            this.router.navigate(['/supervisior']);
        }
        else {
            console.error('Unrecognized role:', role);
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 2, consts: [[1, "login-page"], [1, "forms-container"], [1, "login-form", 3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn"], [2, "padding-left", "53px", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to the login page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_15_listener() { return ctx.navigateToForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f0f0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n \r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.custom-file[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.custom-file-input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.login-page[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n \r\n}\r\n\r\n.login-form[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #007bff;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.forgot-password-form[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.forgot-password-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: calc(100% - 80px);\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.forgot-password-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 8px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.forgot-password-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTZERTs7QUFFRjtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFHQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMzMzOyBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzY2NjsgXHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuYnV0dG9uLmJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmNjOyBcclxuICBjb2xvcjogI2ZmZjsgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTk7IFxyXG59XHJcbi5sb2dpbi1mb3JtIGEge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgXHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dCxcclxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcclxuIFxyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI2QzMmYyZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tYnV0dG9uLFxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbjpob3ZlcixcclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuXHJcbi5jdXN0b20tZmlsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIFxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSAuYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PostComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "votes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.upvotes);
} }
const _c0 = function (a1) { return ["/post", a1]; };
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_div_0_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostComponent_div_0_div_14_Template, 15, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.post.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("postcreatedon: ", ctx_r0.post.created_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.post.comments);
} }
class PostComponent {
    constructor(route, apiService, sanitizer) {
        this.route = route;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.postImageUrls = {};
        this.imageUrl = null;
        this.header = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.postId = +params['id'];
            this.fetchPostDetails();
            this.fetchCommentsForPost();
        });
    }
    fetchPostDetails() {
        this.apiService.getPosts().subscribe((posts) => {
            this.post = posts.find((post) => post.id === this.postId);
            if (this.post) {
                const imageUrl = this.post.url;
                this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
            }
        }, (error) => {
            console.error('Failed to fetch post details:', error);
        });
    }
    fetchCommentsForPost() {
        if (this.postId) {
            this.apiService.getComments().subscribe((comments) => {
                console.log('All comments:', comments);
                this.post.comments = comments.filter((comment) => comment.postId === this.postId);
                console.log('Filtered comments:', this.post.comments);
            }, (error) => {
                console.error('Failed to fetch comments:', error);
            });
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 1, vars: 1, consts: [["class", "post", "style", "border: 1px solid #ccc; padding: 20px; margin: 155px; margin-top: px;", 4, "ngIf"], [1, "post", 2, "border", "1px solid #ccc", "padding", "20px", "margin", "155px", "margin-top", "px"], [1, "post-header"], [3, "routerLink"], [1, "post-date"], [4, "ngIf"], [1, "post-content", 2, "margin", "10px"], [1, "comments-section"], ["class", "card mb-4", "style", "background-color:#EEF0F2; border: 1px solid #ccc; padding: 20px; height: 15%;", 4, "ngFor", "ngForOf"], ["alt", "Image", 3, "src"], [1, "card", "mb-4", 2, "background-color", "#EEF0F2", "border", "1px solid #ccc", "padding", "20px", "height", "15%"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-row", "align-items-center"], ["src", "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp", "alt", "avatar", "width", "25", "height", "25"], [1, "small", "mb-0", "ms-2"], [1, "small", "text-muted", "mb-0"], [1, "far", "fa-thumbs-up", "mx-2", "fa-xs", "text-black", 2, "margin-top", "-0.16rem"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_div_0_Template, 15, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\r\n    background: white;\r\n    width: 100%;\r\n    margin-top:21px;\r\n    padding-right: 10px;\r\n    padding-right: 10px;\r\n   \r\n  }\r\n  \r\n  .left-icons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .search-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .search-button[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .search-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #333;\r\n  }\r\n  \r\n  .horizon[_ngcontent-%COMP%], .horizons[_ngcontent-%COMP%], .content[_ngcontent-%COMP%], .horizonss[_ngcontent-%COMP%] {\r\n      background-color: white;\r\n    }\r\n  \r\n  .sticky-header[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: #f1f1f1;\r\n    width: 102%;\r\n   \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n  \r\n  .sticky-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .sticky-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .sticky-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n   \r\n    align-items: right;\r\n  }\r\n  \r\n  .post[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    border: 1px solid #ccc;\r\n    padding: 20px;\r\n  \r\n   \r\n  }\r\n  \r\n  .post-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n  \r\n    z-index: 99;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n  }\r\n  \r\n  .post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .post-header[_ngcontent-%COMP%]   .post-date[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #777;\r\n    text-align: right;\r\n  }\r\n  \r\n  .post-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .post-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  .comments-section[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .comments-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .comment-item[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ccc;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .comment-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .comment-user[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .comment-timestamp[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .comment-content[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .comment-button[_ngcontent-%COMP%], .submit-button[_ngcontent-%COMP%] {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .comment-button[_ngcontent-%COMP%]:hover, .submit-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .comment-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    resize: none;\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1px solid #ccc;\r\n    margin: 20px 0;\r\n  }\r\n  \r\n  .valid-user[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n  \r\n  .valid-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .valid-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .sticky-header[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: #f1f1f1;\r\n    height: 37px;\r\n   }\r\n  \r\n  .stickey-header1[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n  \r\n  }\r\n  \r\n  .fas[_ngcontent-%COMP%]{\r\n    font-size: 19px;\r\n  }\r\n  \r\n  .horizon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  \r\n  }\r\n  \r\n  .card1[_ngcontent-%COMP%] {\r\n  \r\n    border: 1px solid #ccc;\r\n    padding: 20px;\r\n    \r\n    height: 15%;\r\n  }\r\n  \r\n  .card0[_ngcontent-%COMP%] {\r\n  \r\n    border: 1px solid #ccc;\r\n    padding: 20px;\r\n    \r\n    height: 15%;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  height: 35%;\r\n    margin-top: 47px;\r\n  }\r\n  \r\n  \r\n  \r\n  .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .card-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .button-link[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 4px;\r\n    transition: background-color 0.3s;\r\n  }\r\n  \r\n  .button-link[_ngcontent-%COMP%]:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .button-link-secondary[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n    background-color: #6c757d;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 4px;\r\n    transition: background-color 0.3s;\r\n  }\r\n  \r\n  .button-link-secondary[_ngcontent-%COMP%]:hover {\r\n    background-color: #444f57;\r\n  }\r\n  \r\n  .text-success[_ngcontent-%COMP%] {\r\n    --bs-text-opacity: 1;\r\n    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\r\n  }\r\n  \r\n  .pe-2[_ngcontent-%COMP%] {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  \r\n  .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: 0;\r\n    border-radius: var(--bs-nav-pills-border-radius);\r\n  }\r\n  \r\n  .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: 0;\r\n    border-radius: var(--bs-nav-pills-border-radius);\r\n  }\r\n  \r\n  .bg-light[_ngcontent-%COMP%] {\r\n    --bs-bg-opacity: 1;\r\n    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\r\n  }\r\n  \r\n  .py-1[_ngcontent-%COMP%] {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  \r\n  .px-2[_ngcontent-%COMP%] {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  \r\n  .mb-0[_ngcontent-%COMP%] {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  \r\n  .custom-file-label[_ngcontent-%COMP%]::after {\r\n    content: \"Browse\";\r\n  }\r\n  \r\n  .custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%]::after {\r\n    border-color: #007bff;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #8f8b8b;\r\n    border-color: #d2d3d4;\r\n    color: #fff;\r\n    margin-left: 10px;\r\n    margin-bottom: 9px;\r\n    margin-top: 6px;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .btn-primary[_ngcontent-%COMP%]:hover {\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n  }\r\n  \r\n  .fas[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .horizon[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    background: white;\r\n    margin-top: 30px;\r\n    margin-right: 15px\r\n  }\r\n  \r\n  .rounded-circle[_ngcontent-%COMP%] {\r\n    border-radius: 40%;\r\n  }\r\n  \r\n  .horizons[_ngcontent-%COMP%]{\r\n    width: 29%;\r\n    margin-left: 52px;\r\n  }\r\n  \r\n  .overflow-hidden[_ngcontent-%COMP%]{\r\n    margin-left: 22px;\r\n   \r\n  \r\n  }\r\n  \r\n  .white-button[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n  \r\n  .change[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    padding-left: 11px;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n  \r\n    }\r\n  \r\n  .change1[_ngcontent-%COMP%]{\r\n      \r\n      padding-left: 11px;\r\n      display: flex;\r\n       justify-content: center;\r\n        align-items: center\r\n    }\r\n  \r\n  .hello2[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      padding-right: 18px;\r\n      padding-left: 8px;\r\n  \r\n    }\r\n  \r\n  .card8[_ngcontent-%COMP%]{\r\n      border: 1px solid #ccc;\r\n       height: 325px;; \r\n       width: 100%;\r\n       margin-top: 47px\r\n    }\r\n  \r\n  .card-body[_ngcontent-%COMP%]{\r\n      \r\n      height: 50%;\r\n       width: 100%;\r\n       \r\n   \r\n    }\r\n  \r\n  .horizonss[_ngcontent-%COMP%]{\r\n      width: 25%;\r\n      margin-left: 5px ; \r\n      height: 100%;\r\n      \r\n      margin-top: -2px;\r\n  \r\n    }\r\n  \r\n  .card[_ngcontent-%COMP%]   overflow-hidden[_ngcontent-%COMP%]{\r\n      margin-right: 14px;\r\n      margin-top: 45px;\r\n    }\r\n  \r\n  .column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 24%;\r\n    padding: 0 10px;\r\n  }\r\n  \r\n  .row[_ngcontent-%COMP%] {margin: 0 -5px;}\r\n  \r\n  .row[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .column[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      display: block;\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n  \r\n  .cardl[_ngcontent-%COMP%] {\r\n    margin-top: 49px;\r\n  \r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    border: 1px solid #ccc;\r\n    height: 284%;\r\n  }\r\n  \r\n  \r\n  \r\n  .requested-font[_ngcontent-%COMP%] {\r\n    font-family: 'Requested Font', sans-serif;\r\n  }\r\n  \r\n  .follow-font[_ngcontent-%COMP%] {\r\n    font-family: 'Follow Font', sans-serif;\r\n  }\r\n  \r\n  \r\n  \r\n  ul.search-results[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    background-color: rgb(187, 185, 185);\r\n    \r\n   \r\n  }\r\n  \r\n  \r\n  \r\n  ul.search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    cursor: pointer;\r\n    color: blue;\r\n    transition: background-color 0.2s; \r\n  }\r\n  \r\n  \r\n  \r\n  ul.search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background-color: #f2f2f2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1COztFQUVyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7Ozs7TUFJSSx1QkFBdUI7SUFDekI7O0VBSUY7SUFDRSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLHlCQUF5QjtJQUN6QixXQUFXOztJQUVYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjs7SUFFckIsa0JBQWtCO0VBQ3BCOztFQUlBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhOzs7RUFHZjs7RUFHQTtJQUNFLG1CQUFtQjs7SUFFbkIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFROztJQUVSLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCOztFQUVoQzs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLFlBQVk7R0FDYjs7RUFDRDtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUdBO0lBQ0UsYUFBYTs7RUFFZjs7RUFDQTs7SUFFRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7O0VBQ0E7O0lBRUUsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztFQUNiOztFQUVBOzs7RUFHQSxXQUFXO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUtBOzs7S0FHRzs7RUFFSDtJQUNFLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBOzswQkFFd0I7O0VBQ3RCLHdCQUF3Qjs7RUFDeEIsd0JBQXdCOztFQUN4Qix1QkFBdUI7O0VBQ3pCLE1BQU07O0VBRU47SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIscUVBQXFFO0VBQ3ZFOztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnREFBZ0Q7RUFDbEQ7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGdEQUFnRDtFQUNsRDs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQiw0RUFBNEU7RUFDOUU7O0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDOztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQzs7RUFDQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsaUJBQWlCOzs7RUFHbkI7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCOztFQUNBO01BQ0Usb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQixhQUFhO09BQ1osdUJBQXVCO1FBQ3RCO0lBQ0o7O0VBQ0E7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGlCQUFpQjs7SUFFbkI7O0VBQ0E7TUFDRSxzQkFBc0I7T0FDckIsYUFBYTtPQUNiLFdBQVc7T0FDWDtJQUNIOztFQUNBOztNQUVFLFdBQVc7T0FDVixXQUFXOzs7SUFHZDs7RUFDQTtNQUNFLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsWUFBWTs7TUFFWixnQkFBZ0I7O0lBRWxCOztFQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjs7RUFFRjtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQSxNQUFNLGNBQWMsQ0FBQzs7RUFHckI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFHQTtJQUNFO01BQ0UsV0FBVztNQUNYLGNBQWM7TUFDZCxtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUNBLG1DQUFtQzs7RUFDbkM7SUFDRSx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBR0Esa0NBQWtDOztFQUNsQztJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsNEJBQTRCOztFQUU5Qjs7RUFFQSxrQ0FBa0M7O0VBQ2xDO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUNBQWlDLEVBQUUsbUNBQW1DO0VBQ3hFOztFQUVBLHFFQUFxRTs7RUFDckU7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjIxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0LWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYnV0dG9uIGkge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob3Jpem9uLFxyXG4gICAgLmhvcml6b25zLFxyXG4gICAgLmNvbnRlbnQsXHJcbiAgICAuaG9yaXpvbnNzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnN0aWNreS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogMTAyJTtcclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGlja3ktaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGlja3ktaGVhZGVyIHAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0aWNreS1oZWFkZXIgYSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgXHJcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5wb3N0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICBcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wb3N0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgXHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnBvc3QtaGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3QtaGVhZGVyIC5wb3N0LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3QtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucG9zdC1jb250ZW50IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50cy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50cy1zZWN0aW9uIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50LWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50LWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29tbWVudC11c2VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY29tbWVudC10aW1lc3RhbXAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbW1lbnQtYnV0dG9uLFxyXG4gIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbW1lbnQtYnV0dG9uOmhvdmVyLFxyXG4gIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50LWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcbiAgaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLnZhbGlkLXVzZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52YWxpZC11c2VyIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAudmFsaWQtdXNlciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIC5zdGlja3ktaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICB9XHJcbiAgLnN0aWNrZXktaGVhZGVyMSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIFxyXG4gIH1cclxuICAuZmFze1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaG9yaXpvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gIH1cclxuICAuY2FyZDEge1xyXG4gIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgMjBweDsgKi9cclxuICAgIGhlaWdodDogMTUlO1xyXG4gIH1cclxuICAuY2FyZDAge1xyXG4gIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgMjBweDsgKi9cclxuICAgIGhlaWdodDogMTUlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgXHJcbiAgXHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0N3B4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiAuY2FyZC1oZWFkZXIge1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLyogLnZhbGlkLXVzZXIge1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTM3cHg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXRvcDogLTIycHg7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMzJweDsgKi9cclxuICAvKiB9ICovIFxyXG4gIFxyXG4gIC5idXR0b24tbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tbGluay1zZWNvbmRhcnkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tbGluay1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NGY1NztcclxuICB9XHJcbiAgLnRleHQtc3VjY2VzcyB7XHJcbiAgICAtLWJzLXRleHQtb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiByZ2JhKHZhcigtLWJzLXN1Y2Nlc3MtcmdiKSwgdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBlLTIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1uYXYtcGlsbHMtYm9yZGVyLXJhZGl1cyk7XHJcbiAgfVxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1uYXYtcGlsbHMtYm9yZGVyLXJhZGl1cyk7XHJcbiAgfVxyXG4gIC5iZy1saWdodCB7XHJcbiAgICAtLWJzLWJnLW9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJzLWxpZ2h0LXJnYiksIHZhcigtLWJzLWJnLW9wYWNpdHkpKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHktMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnB4LTIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWItMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJCcm93c2VcIjtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1maWxlLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4YjhiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDJkM2Q0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5ZDk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDYyY2M7XHJcbiAgfVxyXG4gIC5mYXN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5ob3Jpem9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Jpem9uc3tcclxuICAgIHdpZHRoOiAyOSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTJweDtcclxuICB9XHJcbiAgLm92ZXJmbG93LWhpZGRlbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICBcclxuICBcclxuICB9XHJcbiAgLndoaXRlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2V7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuY2hhbmdlMXtcclxuICAgICAgLyogcGFkZGluZzogMTBweDsgICovXHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5oZWxsbzJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBcclxuICAgIH1cclxuICAgIC5jYXJkOHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgIGhlaWdodDogMzI1cHg7OyBcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgbWFyZ2luLXRvcDogNDdweFxyXG4gICAgfVxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgXHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBcclxuICAgXHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnNze1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4IDsgXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuY2FyZCBvdmVyZmxvdy1oaWRkZW57XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxyXG4gIFxyXG4gIFxyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZGwge1xyXG4gICAgbWFyZ2luLXRvcDogNDlweDtcclxuICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAyODQlO1xyXG4gIH1cclxuICAvKiBjb21wb25lbnQuY3NzIG9yIGdsb2JhbCBzdHlsZXMgKi9cclxuICAucmVxdWVzdGVkLWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSZXF1ZXN0ZWQgRm9udCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb2xsb3ctZm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ0ZvbGxvdyBGb250Jywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHNlYXJjaCByZXN1bHRzIGxpc3QgKi9cclxuICB1bC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIGVhY2ggc2VhcmNoIHJlc3VsdCBpdGVtICovXHJcbiAgdWwuc2VhcmNoLXJlc3VsdHMgbGkge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7IC8qIEFkZCBhIHNtb290aCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBzZWFyY2ggcmVzdWx0IGl0ZW0gd2hlbiBob3ZlcmVkICovXHJcbiAgdWwuc2VhcmNoLXJlc3VsdHMgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-page/public-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/public-page/public-page.component.ts ***!
  \******************************************************/
/*! exports provided: PublicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPageComponent", function() { return PublicPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function (a1) { return ["/post", a1]; };
function PublicPageComponent_div_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, post_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r6.header);
} }
function PublicPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PublicPageComponent_div_5_li_2_Template, 3, 4, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
function PublicPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login & ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PublicPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r2.userName, "");
} }
function PublicPageComponent_div_8_div_3_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.postImageUrls[post_r10.id], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PublicPageComponent_div_8_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "votes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r15.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r15.upvotes);
} }
function PublicPageComponent_div_8_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicPageComponent_div_8_div_3_div_18_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return post_r10.commentContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Add a note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_8_div_3_div_18_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.submitComment(post_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", post_r10.commentContent);
} }
function PublicPageComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PublicPageComponent_div_8_div_3_img_8_Template, 1, 1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PublicPageComponent_div_8_div_3_div_15_Template, 15, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_8_div_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const post_r10 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.toggleCommentSection(post_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PublicPageComponent_div_8_div_3_div_18_Template, 9, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, post_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r10.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("postcreatedon: ", post_r10.created_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.postImageUrls[post_r10.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r10.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r10.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r10.showCommentSection);
} }
function PublicPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicPageComponent_div_8_div_3_Template, 20, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.posts);
} }
function PublicPageComponent_div_9_div_105_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const post_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.postImageUrls[post_r25.id], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PublicPageComponent_div_9_div_105_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "votes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r30.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r30.upvotes);
} }
function PublicPageComponent_div_9_div_105_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicPageComponent_div_9_div_105_div_17_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const post_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return post_r25.commentContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Add a note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_9_div_105_div_17_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const post_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.submitComment(post_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", post_r25.commentContent);
} }
function PublicPageComponent_div_9_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PublicPageComponent_div_9_div_105_img_7_Template, 1, 1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PublicPageComponent_div_9_div_105_div_14_Template, 15, 3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_9_div_105_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const post_r25 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.toggleCommentSection(post_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PublicPageComponent_div_9_div_105_div_17_Template, 9, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r25.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("postcreatedon: ", post_r25.created_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.postImageUrls[post_r25.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r25.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r25.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r25.showCommentSection);
} }
function PublicPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Web Developer at Webestica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I'd love to change the world, but they won\u2019t give me the source code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Connections");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "View Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Create Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Post Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicPageComponent_div_9_Template_input_ngModelChange_71_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.header = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Post Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "textarea", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicPageComponent_div_9_Template_textarea_ngModelChange_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PublicPageComponent_div_9_Template_input_change_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicPageComponent_div_9_Template_a_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.createPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Create Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, PublicPageComponent_div_9_div_105_Template, 19, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getUserImageUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.postCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.commentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.posts);
} }
class PublicPageComponent {
    constructor(apiService, router, datePipe, sanitizer) {
        this.apiService = apiService;
        this.router = router;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.posts = [];
        this.postImageUrls = {};
        this.isUserValid = false;
        this.content = '';
        this.header = '';
        this.selectedFile = null;
        this.users = [];
        this.searchQuery = '';
        this.searchText = '';
        this.originalKeyValuePairs = [];
        this.filteredKeyValuePairs = [];
        this.btnId = '';
        this.combineddatah = [];
        this.postHeaders = [];
    }
    ngOnInit() {
        // this.checkTokenExpiration() 
        this.retrievePosts();
        this.checkIfUserLoggedIn();
        this.getUserStatsFromLocalStorage(this.userId);
        this.getUsers();
        this.combineddata();
        this.createPost();
    }
    search() {
        this.filteredKeyValuePairs = this.originalKeyValuePairs.filter(pair => pair.key.toLowerCase().includes(this.searchText.toLowerCase()) ||
            pair.value.toLowerCase().includes(this.searchText.toLowerCase()));
    }
    getUserImageUrl() {
        if (this.isUserValid && this.users && this.users.length > 0) {
            const loggedInUserId = this.userId;
            const loggedInUser = this.users.find((user) => user.id === loggedInUserId);
            if (loggedInUser) {
                const imageUrl = loggedInUser.url || 'd.jpg.jpg';
                return 'http://localhost:4000/uploads/' + imageUrl;
            }
        }
    }
    // combineddata(){
    //   this.apiService.getCombinedData().subscribe(
    //     (data) => {
    //       this.combineddatah = data.map((user) => {
    //         return {
    //           ...user,
    //           followStatus: user.receivedFollows.length > 0 ? user.receivedFollows[0].status : null,
    //         };
    //       });
    //           console.log()
    //       console.log('Combined Data:', this.combineddatah);
    //     },
    //     (error) => {
    //       console.error('Error fetching combined data:', error);
    //     }
    //   );
    // }
    combineddata() {
        this.apiService.getCombinedData().subscribe((data) => {
            this.combineddatah = data.map((user) => {
                return Object.assign(Object.assign({}, user), { followStatus: user.followRequest === 1 ? 'Received' : 'Not Received' });
            });
            console.log('Combined Data:', this.combineddatah);
        }, (error) => {
            console.error('Error fetching combined data:', error);
        });
    }
    getButtonText(followStatus) {
        return followStatus === 'pending' ? 'Requested' : 'Follow';
    }
    isRequested(followStatus) {
        return followStatus === 'pending';
    }
    checkIfUserLoggedIn() {
        const userItem = localStorage.getItem('user');
        if (userItem) {
            const user = JSON.parse(userItem);
            this.userId = user.id;
            this.userName = user.name;
            console.log(this.userName);
            this.isUserValid = true;
        }
        else {
            this.isUserValid = false;
        }
    }
    retrievePosts() {
        this.apiService.getPosts().subscribe((posts) => {
            this.posts = this.mapPosts(posts);
            this.fetchCommentsForPosts();
            console.log('Posts:', this.posts);
        }, (error) => {
            console.error('Failed to fetch posts:', error);
        });
    }
    fetchCommentsForPosts() {
        this.posts.forEach((post) => {
            this.apiService.getComments().subscribe((comments) => {
                post.comments = comments.filter((comment) => comment.postid === post.id);
            }, (error) => {
                console.error('Failed to fetch comments:', error);
            });
        });
    }
    formatDateTime(dateTime) {
        const date = new Date(dateTime);
        const formattedDate = date.toDateString();
        const formattedTime = date.toTimeString().slice(0, 8);
        return `${formattedDate} ${formattedTime}`;
    }
    toggleCommentSection(postId) {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
            post.showCommentSection = !post.showCommentSection;
        }
    }
    // submitComment(postId: number) {
    //   const post = this.posts.find((p) => p.id === postId);
    //   if (post && post.commentContent) {
    //     this.apiService.createComment(post.commentContent, postId).subscribe(
    //       (response) => {
    //         console.log('Response:', response);
    //         // alert('Comment saved successfully');
    //         post.showCommentSection = false;
    //         post.commentContent = '';
    //       },
    //       (error) => {
    //         console.error('Error:', error);
    //       }
    //     );
    //   } else {
    //     console.log('Content is required.');
    //   }
    // }
    submitComment(postId) {
        const post = this.posts.find((p) => p.id === postId);
        if (post && post.commentContent) {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.reload();
                return;
            }
            this.apiService.createComment(post.commentContent, postId).subscribe((response) => {
                console.log('Response:', response);
                post.comments.push(response);
                post.commentContent = '';
                post.showCommentSection = false;
                this.apiService.getComments().subscribe((comments) => {
                    post.comments = comments.filter((comment) => comment.postid === post.id);
                }, (error) => {
                    console.error('Failed to fetch comments:', error);
                });
            }, (error) => {
                console.error('Error:', error);
            });
        }
        else {
            console.log('Content is required.');
        }
    }
    // checkTokenExpiration() {
    //   this.apiService.checkTokenExpiration().subscribe(
    //     (response) => {
    //       if (response.expired) {
    //         console.log('Token is expired');
    //         this.router.navigate(['/login']);
    //       } else {
    //         console.log('Token is valid');
    //       }
    //     },
    //     (error) => {
    //       console.error('Error checking token expiration:', error);
    //       this.router.navigate(['/login']);
    //     }
    //   );
    // }
    mapPosts(posts) {
        const sortedPosts = posts.sort((a, b) => {
            return new Date(b.created_date).getTime() - new Date(a.created_date).getTime();
        });
        return sortedPosts.map((post) => {
            const sanitizedUrl = post.url ? this.sanitizer.bypassSecurityTrustResourceUrl(post.url) : null;
            this.postImageUrls[post.id] = sanitizedUrl;
            return Object.assign(Object.assign({}, post), { showCommentSection: false, commentContent: '', comments: [], created_date: this.formatDateTime(post.created_date) });
        });
    }
    getUserStatsFromLocalStorage(userId) {
        userId = this.userId;
        this.apiService.getUserStats(userId).subscribe((stats) => {
            console.log('User stats:', stats);
            this.postCount = stats.postCount;
            this.commentCount = stats.commentCount;
        }, (error) => {
            console.error('Failed to fetch user statistics:', error);
        });
    }
    getUsers() {
        this.apiService.getusers().subscribe((users) => {
            this.users = users;
            console.log('Users:', this.users);
        }, (error) => {
            console.error('Failed to fetch users:', error);
        });
    }
    //  logout(): void {
    //   this.apiService.logout().subscribe(
    //     (response) => {
    //       localStorage.removeItem('token');
    //       localStorage.removeItem('role');
    //       localStorage.removeItem('user');
    //       console.log('Logged out successfully');
    //       const expirationTime = response.expirationTime;
    //       console.log(`Token expired at: ${new Date(expirationTime)}`);
    //       // Check if the token is already expired
    //       const currentTime = Date.now();
    //       if (expirationTime && expirationTime < currentTime) {
    //         console.log('Token has already expired, redirecting to login');
    //         this.router.navigate(['/login']);
    //       } else {
    //         sessionStorage.clear();
    //         this.router.navigate(['/login']);
    //       }
    //     },
    //     (error) => {
    //       console.error('Logout failed:', error);
    //     }
    //   );
    // }
    logout() {
        this.apiService.logout().subscribe((response) => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('user');
            console.log('Logged out successfully');
            const expirationTime = response.expirationTime;
            console.log(`Token expired at: ${new Date(expirationTime)}`);
            const currentTime = Date.now();
            if (expirationTime && expirationTime < currentTime) {
                console.log('Token has already expired, redirecting to login');
                this.router.navigate(['/login']);
            }
            else {
                sessionStorage.clear();
                this.router.navigate(['/login']);
            }
        }, (error) => {
            console.error('Logout failed:', error);
        });
    }
    createPost() {
        if (!this.isUserValid) {
            console.log('Invalid user');
            return;
        }
        let obj = {
            content: this.content,
            header: this.header,
            file: this.file.name,
            // url:this.url,
            userid: this.userId,
        };
        console.log('object ', obj);
        this.apiService.createPost(obj).subscribe((response) => {
            console.log('Post created successfully', response);
            alert('Post created successfully');
            this.router.navigate(['/posts']);
        }, (error) => {
            console.error('Error creating post', error);
        });
    }
    onFileSelected(event) {
        const inputElement = event.target;
        if (inputElement.files && inputElement.files.length > 0) {
            this.file = inputElement.files[0];
            console.log('53535', this.file);
        }
    }
    onClickButton(targetUserId) {
        this.btnId = targetUserId;
        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString);
        const requesterId = userData === null || userData === void 0 ? void 0 : userData.id;
        if (!requesterId) {
            console.error('Requester ID not found in localStorage.');
            return;
        }
        this.apiService.sendFollowRequest(targetUserId, requesterId).subscribe((response) => {
            console.log('Follow request sent successfully:', response);
            if (response.status === 'pending') {
                document.getElementById(this.btnId).innerText = 'Requested';
            }
        }, (error) => {
            console.error('Failed to send follow request:', error);
        });
    }
    // getRequesterIdFromLocalStorage(): number | null {
    //   const userDataString = localStorage.getItem('userData');
    //   if (userDataString) {
    //     try {
    //       const userData = JSON.parse(userDataString);
    //       return userData.id;
    //     } catch (error) {
    //       console.error('Error parsing localStorage data:', error);
    //     }
    //   }
    //   return null;
    // }
    getFollowRequests() {
        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString);
        const requesterId = userData === null || userData === void 0 ? void 0 : userData.id;
        if (!requesterId) {
            console.error('Requester ID not found in localStorage.');
            return;
        }
        this.apiService.getFollowRequests(requesterId).subscribe((response) => {
            console.log('Follow requests:', response);
        }, (error) => {
            console.error('Failed to get follow requests:', error);
        });
    }
    updateFollowRequestStatus(requestId, status) {
        this.apiService.updateFollowRequestStatus(requestId, status).subscribe((response) => {
            console.log('Follow request status updated:', response);
        }, (error) => {
            console.error('Failed to update follow request status:', error);
        });
    }
}
PublicPageComponent.ɵfac = function PublicPageComponent_Factory(t) { return new (t || PublicPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
PublicPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicPageComponent, selectors: [["app-public-page"]], decls: 10, vars: 6, consts: [["data-bs-theme", "light", 1, "navbar", "navbar-expand-lg", "bg-light", "fixed-top", 2, "height", "50px"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor03", "aria-controls", "navbarColor03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["type", "text", "placeholder", "Search", 3, "ngModel", "ngModelChange", "input"], ["style", "width: 250px; height: auto; position: fixed; top:45px; min-height: 100px; height: 100%; max-height: 300px; overflow-y: auto;", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [2, "width", "250px", "height", "auto", "position", "fixed", "top", "45px", "min-height", "100px", "height", "100%", "max-height", "300px", "overflow-y", "auto"], [1, "search-results", 2, "width", "100%", "background-color", "lavender"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "navbar-icon"], [1, "fas", "fa-cog"], [1, "fas", "fa-bell"], [1, "fas", "fa-envelope"], ["routerLink", "/login"], ["routerLink", "/register"], [1, "d-flex", "align-items-center"], [1, "hi"], [2, "margin-bottom", "0", "margin-right", "9px"], [1, "valid-user1", "ml-auto", 2, "margin-bottom", "21px"], [2, "background", "transparent", "border", "0", "color", "#558ed7", "text-decoration", "underline", "padding", "0px", "margin", "0px", "margin-top", "20px", 3, "click"], [1, "horizon"], [1, "pen", 2, "background", "white", "width", "100%", "margin-top", "47px", "padding-right", "10px", "margin-left", "20px"], ["class", "post", 4, "ngFor", "ngForOf"], [1, "post"], [1, "post-header"], [1, "post-date"], [1, "post-content"], ["alt", "Post Image", 3, "src", 4, "ngIf"], [1, "comments-section"], ["class", "card mb-4", "style", " background-color:#EEF0F2;border: 1px solid #ccc;\n        padding: 20px;\n        /* margin-top: 46px; */\n        height: 15%;", 4, "ngFor", "ngForOf"], [1, "comment-button", 3, "click"], ["class", "comment-section", 4, "ngIf"], ["alt", "Post Image", 3, "src"], [1, "card", "mb-4", 2, "background-color", "#EEF0F2", "border", "1px solid #ccc", "padding", "20px", "/* margin-top", "46px", "*/\n        height", "15%"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-row", "align-items-center"], ["src", "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp", "alt", "avatar", "width", "25", "height", "25"], [1, "small", "mb-0", "ms-2"], [1, "small", "text-muted", "mb-0"], [1, "far", "fa-thumbs-up", "mx-2", "fa-xs", "text-black", 2, "margin-top", "-0.16rem"], [1, "comment-section"], [1, "card", "shadow-0", "border", 2, "background-color", "#f0f2f5"], [1, "card-body", "p-4"], [1, "form-outline", "mb-4"], ["type", "text", "id", "addANote", "placeholder", "Type comment...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "addANote", 1, "form-label"], [1, "submit-button", 3, "click"], [1, "horizons"], [1, "card", "overflow-hidden", 2, "margin-right", "14px", "margin-top", "45px"], [1, "card-body", "pt-0"], [1, "text"], [1, "change"], [1, "text1"], [1, "change1", 2, "padding-left", "11px"], ["height", "50px", "weight", "5px", "alt", "User Image", 1, "rounded-circle", 3, "src"], [1, "mb-0"], ["href", "#!"], [1, "mt-3"], [1, "hstack", "gap-2", "gap-xl-3", "justify-content-center"], [1, "vr"], [1, "nav", "nav-link-secondary", "flex-column", "fw-bold", "gap-2"], [1, "nav-item"], ["href", "#!", 1, "nav-link"], [1, "fas", "fa-home"], [1, "fas", "fa-network-wired"], [1, "far", "fa-calendar-alt"], [1, "fas", "fa-users"], [1, "card-footer", "text-center", "py-2"], ["href", "#!", 1, "btn", "btn-link", "btn-sm"], [1, "ansh"], [1, "hello2"], [1, "col"], [1, "card8"], [1, "change1"], ["height", "50px", "weight", "5px", "src", "assets/pps.jpg", "alt", "User Image", 2, "margin-left", "10px"], [1, "form-group"], ["for", "postHeader", 2, "color", "#25292e", "margin-left", "10px"], ["type", "text", "id", "postHeader", "placeholder", "", 1, "form-control", 2, "border", "0", "background-color", "#f8f9fa", "width", "96%", "margin-left", "11px", 3, "ngModel", "ngModelChange"], ["for", "postContent", 2, "color", "#25292e", "margin-left", "10px"], ["id", "postContent", "placeholder", "", 1, "form-control", 2, "border", "0", "background-color", "#f8f9fa", "width", "96%", "margin-left", "11px", "height", "100px", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-flex"], [1, "mr-2"], ["for", "postImage", 2, "color", "#11171d", "margin-left", "10px"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text", 2, "border", "0", "background-color", "#f8f9fa", "margin-left", "11px"], [1, "fas", "fa-file"], [1, "custom-file"], ["type", "file", "id", "postImage", "name", "user_file", 1, "custom-file-input", 2, "margin-right", "-45px", 3, "change"], [1, "nav", "nav-pills", "nav-stack", "small", "fw-normal", 2, "margin-top", "24px"], ["href", "#!", "data-bs-toggle", "modal", "data-bs-target", "#feedActionPhoto", 1, "nav-link", "bg-light", "py-1", "px-2", "mb-0", 2, "margin-right", "2px", "margin-left", "86px"], [1, "bi", "bi-image-fill", "text-success", "pe-2"], ["href", "#!", "data-bs-toggle", "modal", "data-bs-target", "#feedActionVideo", 1, "nav-link", "bg-light", "py-1", "px-2", "mb-0", 2, "margin-left", "4px"], [1, "bi", "bi-camera-reels-fill", "text-info", "pe-2"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#modalCreateEvents", 1, "nav-link", "bg-light", "py-1", "px-2", "mb-0", 2, "margin-left", "4px"], [1, "bi", "bi-calendar2-event-fill", "text-danger", "pe-2"], ["href", "#!", 1, "nav-link", "bg-light", "py-1", "px-2", "mb-0", 2, "margin-left", "4px", 3, "click"], [1, "fas", "fa-plus-circle", 2, "color", "#ff0000"], [1, "row"], [1, "content"], [1, "horizonss"], [1, "col-sm-6", "col-lg-12"], [1, "card"], [1, "card-header", "pb-0", "border-0"], ["height", "50px", "weight", "5px", "src", "assets/follow.jpg", "alt", "User Image", 2, "height", "61%", "margin-left", "25px", "width", "76%"], [1, "card-bodye"], [1, "hstack", "gap-2", "mb-3"], [1, "avatar"], ["src", "assets/images/avatar/04.jpg", "alt", "", 1, "avatar-img", "rounded-circle"], ["class", "card mb-4", "style", " background-color:#EEF0F2;border: 1px solid #ccc;padding: 20px; /* margin-top: 46px; */height: 15%;", 4, "ngFor", "ngForOf"], [1, "card", "mb-4", 2, "background-color", "#EEF0F2", "border", "1px solid #ccc", "padding", "20px", "/* margin-top", "46px", "*/height", "15%"]], template: function PublicPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicPageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchText = $event; })("input", function PublicPageComponent_Template_input_input_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicPageComponent_div_5_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicPageComponent_div_6_Template, 14, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PublicPageComponent_div_7_Template, 8, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PublicPageComponent_div_8_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PublicPageComponent_div_9_Template, 118, 7, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserValid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".content[_ngcontent-%COMP%] {\r\n  background: white;\r\n  width: 100%;\r\n  margin-top:21px;\r\n  padding-right: 10px;\r\n  padding-right: 10px;\r\n \r\n}\r\n\r\n.left-icons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  margin-left: 5px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n.horizon[_ngcontent-%COMP%], .horizons[_ngcontent-%COMP%], .content[_ngcontent-%COMP%], .horizonss[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n\r\n.sticky-header[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: #f1f1f1;\r\n  width: 102%;\r\n \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.sticky-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.sticky-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.sticky-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n \r\n  align-items: right;\r\n}\r\n\r\n.post[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ccc;\r\n  padding: 20px;\r\n\r\n \r\n}\r\n\r\n.post-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  \r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n\r\n  z-index: 99;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  \r\n}\r\n\r\n.post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.post-header[_ngcontent-%COMP%]   .post-date[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n  text-align: right;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.comments-section[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.comments-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n  padding-bottom: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment-details[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-user[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment-timestamp[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.comment-content[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  line-height: 1.5;\r\n}\r\n\r\n.comment-button[_ngcontent-%COMP%], .submit-button[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-button[_ngcontent-%COMP%]:hover, .submit-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.comment-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 80px;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n  resize: none;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-top: 1px solid #ccc;\r\n  margin: 20px 0;\r\n}\r\n\r\n.valid-user[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.valid-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border-radius: 4px;\r\n}\r\n\r\n.valid-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.sticky-header[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: #f1f1f1;\r\n  height: 37px;\r\n }\r\n\r\n.stickey-header1[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n\r\n}\r\n\r\n.fas[_ngcontent-%COMP%]{\r\n  font-size: 19px;\r\n}\r\n\r\n.horizon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\r\n}\r\n\r\n.card1[_ngcontent-%COMP%] {\r\n\r\n  border: 1px solid #ccc;\r\n  padding: 20px;\r\n  \r\n  height: 15%;\r\n}\r\n\r\n.card0[_ngcontent-%COMP%] {\r\n\r\n  border: 1px solid #ccc;\r\n  padding: 20px;\r\n  \r\n  height: 15%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n\r\n  \r\nheight: 15%;\r\n  margin-top: 47px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button-link[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 8px 16px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.button-link[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.button-link-secondary[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 8px 16px;\r\n  background-color: #6c757d;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.button-link-secondary[_ngcontent-%COMP%]:hover {\r\n  background-color: #444f57;\r\n}\r\n\r\n.text-success[_ngcontent-%COMP%] {\r\n  --bs-text-opacity: 1;\r\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\r\n}\r\n\r\n.pe-2[_ngcontent-%COMP%] {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: 0;\r\n  border-radius: var(--bs-nav-pills-border-radius);\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: 0;\r\n  border-radius: var(--bs-nav-pills-border-radius);\r\n}\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n  --bs-bg-opacity: 1;\r\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\r\n}\r\n\r\n.py-1[_ngcontent-%COMP%] {\r\n  padding-top: 0.25rem !important;\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.px-2[_ngcontent-%COMP%] {\r\n  padding-right: 0.5rem !important;\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.custom-file-label[_ngcontent-%COMP%]::after {\r\n  content: \"Browse\";\r\n}\r\n\r\n.custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%]::after {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #8f8b8b;\r\n  border-color: #d2d3d4;\r\n  color: #fff;\r\n  margin-left: 10px;\r\n  margin-bottom: 9px;\r\n  margin-top: 6px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #0069d9;\r\n  border-color: #0062cc;\r\n}\r\n\r\n.fas[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n\r\n.horizon[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  background: white;\r\n  margin-top: 30px;\r\n  margin-right: 15px\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n  border-radius: 40%;\r\n}\r\n\r\n.horizons[_ngcontent-%COMP%]{\r\n  width: 29%;\r\n  margin-left: 52px;\r\n}\r\n\r\n.overflow-hidden[_ngcontent-%COMP%]{\r\n  margin-left: 22px;\r\n \r\n\r\n}\r\n\r\n.white-button[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.change[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  padding-left: 11px;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n\r\n  }\r\n\r\n.change1[_ngcontent-%COMP%]{\r\n    padding-left: 11px;\r\n    display: flex;\r\n     justify-content: center;\r\n      align-items: center\r\n  }\r\n\r\n.hello2[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-right: 18px;\r\n    padding-left: 8px;\r\n\r\n  }\r\n\r\n.card8[_ngcontent-%COMP%]{\r\n    border: 1px solid #ccc;\r\n     height: 325px;; \r\n     width: 100%;\r\n     margin-top: 47px\r\n  }\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n     width: 100%;\r\n     }\r\n\r\n.horizonss[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n    margin-left: 5px ; \r\n    height: 100%;\r\n    margin-top: -2px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   overflow-hidden[_ngcontent-%COMP%]{\r\n    margin-right: 14px;\r\n    margin-top: 45px;\r\n  }\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 24%;\r\n  padding: 0 10px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {margin: 0 -5px;}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .column[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.cardl[_ngcontent-%COMP%] {\r\n  margin-top: 49px;\r\n\r\n  text-align: center;\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #ccc;\r\n  height: 284%;\r\n}\r\n\r\n.requested-font[_ngcontent-%COMP%] {\r\n  font-family: 'Requested Font', sans-serif;\r\n}\r\n\r\n.follow-font[_ngcontent-%COMP%] {\r\n  font-family: 'Follow Font', sans-serif;\r\n}\r\n\r\nul.search-results[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  position: absolute;\r\n  background-color: rgb(187, 185, 185);\r\n  \r\n \r\n}\r\n\r\nul.search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  color: blue;\r\n  transition: background-color 0.2s; \r\n}\r\n\r\nul.search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2f2f2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLXBhZ2UvcHVibGljLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTs7OztJQUlJLHVCQUF1QjtFQUN6Qjs7QUFJRjtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04seUJBQXlCO0VBQ3pCLFdBQVc7O0VBRVgsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7OztBQUdmOztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7O0VBRVIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7O0FBRWhDOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTix5QkFBeUI7RUFDekIsWUFBWTtDQUNiOztBQUNEO0VBQ0UsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhOztBQUVmOztBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7OztBQUdBLFdBQVc7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBT0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxRUFBcUU7QUFDdkU7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdEQUFnRDtBQUNsRDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RTs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7OztBQUduQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtLQUNaLHVCQUF1QjtNQUN0QjtFQUNKOztBQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7O0VBRW5COztBQUVBO0lBQ0Usc0JBQXNCO0tBQ3JCLGFBQWE7S0FDYixXQUFXO0tBQ1g7RUFDSDs7QUFFQTtJQUNFLFdBQVc7S0FDVixXQUFXO0tBQ1g7O0FBRUg7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBR0U7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUdGO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLE1BQU0sY0FBYyxDQUFDOztBQUNyQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUdBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsb0NBQW9DOzs7QUFHdEM7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtcGFnZS9wdWJsaWMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MjFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiBcclxufVxyXG5cclxuLmxlZnQtaWNvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIGkge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5ob3Jpem9uLFxyXG4gIC5ob3Jpem9ucyxcclxuICAuY29udGVudCxcclxuICAuaG9yaXpvbnNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN0aWNreS1oZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGlja3ktaGVhZGVyIHAgc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zdGlja3ktaGVhZGVyIGEge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIFxyXG4gIGFsaWduLWl0ZW1zOiByaWdodDtcclxufVxyXG5cclxuXHJcblxyXG4ucG9zdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gXHJcbn1cclxuXHJcblxyXG4ucG9zdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIFxyXG59XHJcblxyXG4ucG9zdC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wb3N0LWhlYWRlciAucG9zdC1kYXRlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29tbWVudHMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbW1lbnRzLXNlY3Rpb24gaDQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudC1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudC1kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LXVzZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29tbWVudC10aW1lc3RhbXAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLmNvbW1lbnQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5jb21tZW50LWJ1dHRvbixcclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29tbWVudC1idXR0b246aG92ZXIsXHJcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4uY29tbWVudC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4udmFsaWQtdXNlciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi52YWxpZC11c2VyIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udmFsaWQtdXNlciBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcbi5zdGlja3ktaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGhlaWdodDogMzdweDtcclxuIH1cclxuLnN0aWNrZXktaGVhZGVyMSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuXHJcbn1cclxuLmZhc3tcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcblxyXG4uaG9yaXpvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLmNhcmQxIHtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8qIG1hcmdpbjogMCAyMHB4OyAqL1xyXG4gIGhlaWdodDogMTUlO1xyXG59XHJcbi5jYXJkMCB7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvKiBtYXJnaW46IDAgMjBweDsgKi9cclxuICBoZWlnaHQ6IDE1JTtcclxufVxyXG5cclxuLmNhcmQge1xyXG5cclxuICBcclxuaGVpZ2h0OiAxNSU7XHJcbiAgbWFyZ2luLXRvcDogNDdweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tbGluayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5idXR0b24tbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLmJ1dHRvbi1saW5rLXNlY29uZGFyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5idXR0b24tbGluay1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDRmNTc7XHJcbn1cclxuLnRleHQtc3VjY2VzcyB7XHJcbiAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tYnMtc3VjY2Vzcy1yZ2IpLCB2YXIoLS1icy10ZXh0LW9wYWNpdHkpKSAhaW1wb3J0YW50O1xyXG59XHJcbi5wZS0yIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtbmF2LXBpbGxzLWJvcmRlci1yYWRpdXMpO1xyXG59XHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1uYXYtcGlsbHMtYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuLmJnLWxpZ2h0IHtcclxuICAtLWJzLWJnLW9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1icy1saWdodC1yZ2IpLCB2YXIoLS1icy1iZy1vcGFjaXR5KSkgIWltcG9ydGFudDtcclxufVxyXG4ucHktMSB7XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5weC0yIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYi0wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XHJcbiAgY29udGVudDogXCJCcm93c2VcIjtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4YjhiO1xyXG4gIGJvcmRlci1jb2xvcjogI2QyZDNkNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNjJjYztcclxufVxyXG4uZmFze1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uaG9yaXpvbntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHhcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbn1cclxuXHJcbi5ob3Jpem9uc3tcclxuICB3aWR0aDogMjklO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG59XHJcbi5vdmVyZmxvdy1oaWRkZW57XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiBcclxuXHJcbn1cclxuLndoaXRlLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hhbmdle1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY2hhbmdlMXtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICB9XHJcblxyXG4gIC5oZWxsbzJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgaGVpZ2h0OiAzMjVweDs7IFxyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1hcmdpbi10b3A6IDQ3cHhcclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICB9XHJcblxyXG4gIC5ob3Jpem9uc3N7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweCA7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuXHJcbiAgLmNhcmQgb3ZlcmZsb3ctaGlkZGVue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcblxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5yb3cge21hcmdpbjogMCAtNXB4O31cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkbCB7XHJcbiAgbWFyZ2luLXRvcDogNDlweDtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBoZWlnaHQ6IDI4NCU7XHJcbn1cclxuXHJcbi5yZXF1ZXN0ZWQtZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSZXF1ZXN0ZWQgRm9udCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb2xsb3ctZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGb2xsb3cgRm9udCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxudWwuc2VhcmNoLXJlc3VsdHMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xyXG4gIFxyXG4gXHJcbn1cclxuXHJcblxyXG51bC5zZWFyY2gtcmVzdWx0cyBsaSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmx1ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7IFxyXG59XHJcblxyXG5cclxudWwuc2VhcmNoLXJlc3VsdHMgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-page',
                templateUrl: './public-page.component.html',
                styleUrls: ['./public-page.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RegisterComponent_div_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_8_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name should only contain alphabets and spaces.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_8_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_8_p_2_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("name").errors == null ? null : ctx_r0.userForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("name").errors == null ? null : ctx_r0.userForm.get("name").errors.pattern);
} }
function RegisterComponent_div_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_13_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_13_p_2_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("email").errors == null ? null : ctx_r1.userForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("email").errors == null ? null : ctx_r1.userForm.get("email").errors.email);
} }
function RegisterComponent_div_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be greater than 6 digits and contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_18_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_18_p_2_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("password").errors == null ? null : ctx_r2.userForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("password").errors == null ? null : ctx_r2.userForm.get("password").errors.minlength);
} }
function RegisterComponent_div_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_21_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("user_file").errors == null ? null : ctx_r3.userForm.get("user_file").errors.required);
} }
function RegisterComponent_div_35_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_35_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("roles").errors == null ? null : ctx_r4.userForm.get("roles").errors.required);
} }
class RegisterComponent {
    constructor(apiService, router, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]],
            user_file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (localStorage.getItem('role') === 'admin') {
            window.location.href = './admin';
        }
        else if (localStorage.getItem('role') === 'supervisior') {
            window.location.href = './supervisior';
        }
        else if (localStorage.getItem('role') === 'basic') {
            window.location.href = './basic';
        }
        else {
            this.router.navigate(['/register']);
        }
    }
    onSubmit() {
        if (this.userForm.valid) {
            const user = {
                name: this.userForm.value.name,
                email: this.userForm.value.email,
                password: this.userForm.value.password,
                roles: this.userForm.value.roles,
                file: this.userForm.value.user_file.name,
            };
            this.apiService.createUser(user).subscribe(() => {
                this.router.navigate(['/login']);
            });
        }
        else {
            alert('Please fill all the fields');
        }
    }
    onImageSelected(event) {
        const inputElement = event.target;
        if (inputElement.files && inputElement.files.length > 0) {
            this.userForm.patchValue({
                user_file: inputElement.files[0]
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 6, consts: [[1, "card", 2, "margin-left", "34%"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "form-title"], [1, "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input", "p-input"], ["class", "error-message", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-input", "p-input"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-input", "p-input"], [1, "custom-file"], ["type", "file", "id", "postImage", "formControlName", "user_file", 1, "custom-file-input", 3, "change"], ["for", "roles", 1, "form-label"], ["id", "roles", "formControlName", "roles", 1, "form-input", "p-input"], ["value", ""], ["value", "admin"], ["value", "supervisor"], ["value", "user"], [1, "form-group", "button-group"], ["type", "submit", 1, "form-button"], [1, "error-message"], [4, "ngIf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_20_listener($event) { return ctx.onImageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Roles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select a role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("name").invalid && (ctx.userForm.get("name").dirty || ctx.userForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("email").invalid && (ctx.userForm.get("email").dirty || ctx.userForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("password").invalid && (ctx.userForm.get("password").dirty || ctx.userForm.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("user_file").invalid && ctx.userForm.get("user_file").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("roles").invalid && (ctx.userForm.get("roles").dirty || ctx.userForm.get("roles").touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f0f0;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.form-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n.error-message[_ngcontent-%COMP%] {\r\n  color: #d32f2f;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n}\r\n.form-button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n.form-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4REc7QUFDSDtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLHNDQUFzQztBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mb3JtLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjFiMTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnAtaW5wdXQge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufSAqL1xyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQsXHJcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNkMzJmMmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLyogU3R5bGluZyBmb3IgdGhlIGN1c3RvbSBmaWxlIGlucHV0ICovXHJcbi8qIC5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtbGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn0gKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ResetPasswordComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    onResetPassword() {
        this.apiService.resetP(this.email, this.oldPassword, this.newPassword).subscribe(() => {
            this.showAlert('Password reset successfully', 'please login again');
            this.router.navigate(['/login']);
        }, (error) => {
            console.error(error);
            this.showAlert('error', 'Failed to reset password');
        });
    }
    showAlert(type, message) {
        if (type === 'success') {
            alert(message);
        }
        else if (type === 'error') {
            alert(message);
        }
        else {
            console.warn('Unsupported alert type:', type);
        }
    }
    ngOnInit() { }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 15, vars: 2, consts: [[3, "ngSubmit"], ["for", "oldPassword"], ["type", "password", "name", "oldPassword", "required", "", 3, "ngModel", "ngModelChange"], ["for", "newPassword"], ["type", "password", "name", "newPassword", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.onResetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Old Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_7_listener($event) { return ctx.oldPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css'],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supervisior/supervisior.component.ts":
/*!******************************************************!*\
  !*** ./src/app/supervisior/supervisior.component.ts ***!
  \******************************************************/
/*! exports provided: SupervisiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisiorComponent", function() { return SupervisiorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SupervisiorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SupervisiorComponent_div_9_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onResetPasswordSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Old Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_div_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.oldPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_div_9_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupervisiorComponent_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancelResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.oldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newPassword);
} }
function SupervisiorComponent_ng_container_24_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SupervisiorComponent_ng_container_24_tr_13_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.performUpdate(user_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_ng_container_24_tr_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_ng_container_24_tr_13_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_ng_container_24_tr_13_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupervisiorComponent_ng_container_24_tr_13_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return user_r8.roles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupervisiorComponent_ng_container_24_tr_13_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.cancelUpdate(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r8.roles);
} }
function SupervisiorComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupervisiorComponent_ng_container_24_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const user_r8 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.performUpdate(user_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SupervisiorComponent_ng_container_24_tr_13_Template, 19, 4, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r8.isEditing);
} }
function SupervisiorComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unauthorized Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, you do not have access to this page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SupervisiorComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.showPasswordResetForm = false;
    }
    ngOnInit() {
        this.roles = localStorage.getItem('role');
        if (this.roles !== 'admin' && this.roles !== 'supervisior') {
            this.router.navigate(['/login']);
        }
        this.apiService.getusers().subscribe((response) => {
            this.users = response; // 
        }, (error) => {
            console.error(error);
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.email = this.user['email'];
    }
    performUpdate(id) {
        const user = this.users.find(u => u.id === id);
        if (!user)
            return;
        user.isEditing = true; // Disable editing mode
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            roles: user.roles
        };
        this.apiService.updateUser(id, userData).subscribe((response) => {
            console.log('User updated successfully');
            // Handle any necessary UI updates or notifications
        }, (error) => {
            console.error('Failed to update user:', error);
            // Handle the error response, display an error message, or perform any necessary error handling
        });
    }
    cancelUpdate(user) {
        user.isEditing = false; // Disable editing mode
    }
    onResetPassword() {
        this.showPasswordResetForm = true;
    }
    cancelResetPassword() {
        this.showPasswordResetForm = false;
        this.oldPassword = '';
        this.newPassword = '';
    }
    onResetPasswordSubmit() {
        this.apiService.resetP(this.email, this.oldPassword, this.newPassword).subscribe(() => {
            this.showAlert('success', 'Password reset successfully');
            this.cancelResetPassword();
        }, (error) => {
            console.error(error);
            this.showAlert('error', 'Failed to reset password');
        });
    }
    showAlert(type, message) {
        if (type === 'success') {
            alert(message);
        }
        else if (type === 'error') {
            alert(message);
        }
        else {
            console.warn('Unsupported alert type:', type);
        }
    }
    logout() {
        this.apiService.logout().subscribe((response) => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('user');
            console.log('Logged out successfully');
            const expirationTime = response.expirationTime;
            sessionStorage.clear();
            this.router.navigate(['/posts']);
        }, (error) => {
            console.error('Logout failed:', error);
        });
    }
}
SupervisiorComponent.ɵfac = function SupervisiorComponent_Factory(t) { return new (t || SupervisiorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
SupervisiorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupervisiorComponent, selectors: [["app-supervisior"]], decls: 26, vars: 3, consts: [[1, "supervisior-dashboard"], [1, "supervisior-title"], [1, "supervisior-description"], [1, "btn", "logout-button", "red-button", 3, "click"], [3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "unauthorized-access", 4, "ngIf"], [3, "submit"], ["for", "oldPassword"], ["type", "password", "id", "oldPassword", "name", "oldPassword", "required", "", 3, "ngModel", "ngModelChange"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["type", "button", 3, "click"], [1, "update-button", 3, "click"], ["colspan", "5"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["for", "roles"], ["type", "text", "id", "roles", "name", "roles", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "update-submit-button"], [1, "update-cancel-button", 3, "click"], [1, "unauthorized-access"]], template: function SupervisiorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, Supervisior!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is the supervisior dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupervisiorComponent_Template_button_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupervisiorComponent_Template_button_click_7_listener() { return ctx.showPasswordResetForm = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SupervisiorComponent_div_9_Template, 14, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SupervisiorComponent_ng_container_24_Template, 14, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SupervisiorComponent_div_25_Template, 5, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPasswordResetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roles !== "supervisior" && ctx.roles !== "basic");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".supervisior-dashboard[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.supervisior-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: #0066cc; \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.supervisior-description[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #333; \r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: left;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #0066cc; \r\n  color: #fff; \r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.update-button[_ngcontent-%COMP%] {\r\n  background-color: #ff9933; \r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.update-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #ff8000; \r\n}\r\n\r\n.update-submit-button[_ngcontent-%COMP%] {\r\n  background-color: #0066cc; \r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.update-submit-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #004c99; \r\n}\r\n\r\n.update-cancel-button[_ngcontent-%COMP%] {\r\n  background-color: #333; \r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.update-cancel-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #1a1a1a; \r\n}\r\n\r\n.red-button[_ngcontent-%COMP%] {\r\n  color: red;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJ2aXNpb3Ivc3VwZXJ2aXNpb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFFLHFCQUFxQjtFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFFLG9CQUFvQjtBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHFCQUFxQjtFQUNoRCxXQUFXLEVBQUUsZ0JBQWdCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsaUJBQWlCO0VBQzVDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsd0JBQXdCO0FBQ3JEOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsNEJBQTRCO0FBQ3pEOztBQUVBO0VBQ0Usc0JBQXNCLEVBQUUsb0JBQW9CO0VBQzVDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsc0JBQXNCO0FBQ25EOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdEQUFnRDtBQUNsRCIsImZpbGUiOiJzcmMvYXBwL3N1cGVydmlzaW9yL3N1cGVydmlzaW9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwZXJ2aXNpb3ItZGFzaGJvYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uc3VwZXJ2aXNpb3ItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzAwNjZjYzsgLyogUm95YWwgQmx1ZSBjb2xvciAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdXBlcnZpc2lvci1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrIGdyYXkgY29sb3IgKi9cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2Y2M7IC8qIFJveWFsIEJsdWUgY29sb3IgKi9cclxuICBjb2xvcjogI2ZmZjsgLyogV2hpdGUgY29sb3IgKi9cclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4udXBkYXRlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkzMzsgLyogT3JhbmdlIGNvbG9yICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi51cGRhdGUtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwOyAvKiBEYXJrZXIgb3JhbmdlIGNvbG9yICovXHJcbn1cclxuXHJcbi51cGRhdGUtc3VibWl0LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZjYzsgLyogUm95YWwgQmx1ZSBjb2xvciAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udXBkYXRlLXN1Ym1pdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTk7IC8qIERhcmtlciBSb3lhbCBCbHVlIGNvbG9yICovXHJcbn1cclxuXHJcbi51cGRhdGUtY2FuY2VsLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogRGFyayBncmF5IGNvbG9yICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi51cGRhdGUtY2FuY2VsLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsgLyogRGFya2VyIGdyYXkgY29sb3IgKi9cclxufVxyXG4ucmVkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICAvKiBBZGQgYW55IG90aGVyIGRlc2lyZWQgc3R5bGVzIGZvciB0aGUgYnV0dG9uICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupervisiorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supervisior',
                templateUrl: './supervisior.component.html',
                styleUrls: ['./supervisior.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/unauthorised/unauthorised.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorised/unauthorised.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorisedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return UnauthorisedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnauthorisedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthorisedComponent.ɵfac = function UnauthorisedComponent_Factory(t) { return new (t || UnauthorisedComponent)(); };
UnauthorisedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorisedComponent, selectors: [["app-unauthorised"]], decls: 4, vars: 0, template: function UnauthorisedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops!!Unauthorized Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sorry, you do not have access to this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXNlZC91bmF1dGhvcmlzZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorisedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unauthorised',
                templateUrl: './unauthorised.component.html',
                styleUrls: ['./unauthorised.component.css']
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anshu Rajpoot\Desktop\anshu\node and angu project crud and token, toen expiration,prisma\angu\role\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map