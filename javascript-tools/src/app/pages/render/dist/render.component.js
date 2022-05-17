"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RenderComponent = void 0;
var core_1 = require("@angular/core");
var _ = require("lodash");
var RenderComponent = /** @class */ (function () {
    function RenderComponent(toolsDoc) {
        this.toolsDoc = toolsDoc;
        this.initCode = '';
    }
    RenderComponent.prototype.ngOnChanges = function (changes) {
        var currentValue = changes['renderData'].currentValue;
        if (currentValue) {
            this.initCode = currentValue;
        }
    };
    RenderComponent.prototype.ngOnInit = function () {
        var arr1 = [1, 2, 3, 4, 5];
        var newArr1 = _.fill(arr1, 'tjt');
        console.log('newArr1:', newArr1);
        console.log('arr1:', arr1);
        var arr2 = [1, 2, 3, 4, 5];
        var newArr2 = _.fill(arr2, 'qsn', 1, 4);
        console.log('newArr2:', newArr2);
        console.log('arr2:', arr2);
    };
    __decorate([
        core_1.Input()
    ], RenderComponent.prototype, "renderData");
    RenderComponent = __decorate([
        core_1.Component({
            selector: 'app-render',
            templateUrl: './render.component.html',
            styleUrls: ['./render.component.less']
        })
    ], RenderComponent);
    return RenderComponent;
}());
exports.RenderComponent = RenderComponent;
