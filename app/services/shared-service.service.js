"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SharedService = (function () {
    function SharedService() {
        //set to blank
        this.room = '';
        this.red = 0;
        this.green = 0;
        this.amber = 0;
    }
    SharedService.prototype.set = function (roomName) {
        this.room = roomName;
    };
    SharedService.prototype.setRed = function (red) {
        this.red = red;
    };
    SharedService.prototype.setGreen = function (green) {
        console.log('you gave me these greens: ' + this.green);
        this.green = green;
        console.log(this.green);
    };
    SharedService.prototype.setAmber = function (amber) {
        this.amber = amber;
    };
    SharedService.prototype.getRoomName = function () {
        return this.room;
    };
    SharedService.prototype.getGreen = function () {
        console.log(this.green);
        return this.green;
    };
    SharedService.prototype.getRed = function () {
        console.log(this.red);
        return this.red;
    };
    SharedService.prototype.getAmber = function () {
        console.log(this.amber);
        return this.amber;
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared-service.service.js.map