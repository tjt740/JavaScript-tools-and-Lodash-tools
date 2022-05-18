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
        var list = [
            { userName: '谭金涛', active: false },
            { userName: '戚思宁', active: false },
            { userName: '柳晔', active: true },
            { userName: '徐晨彦', active: true },
        ];
        _.head(list);
        // →  { userName: '谭金涛', active: false }
        var arr = [1, 2, 3];
        _.head(arr);
        // 1
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
