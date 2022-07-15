import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// 左侧菜单栏
import * as all from '../../config/menu-config';
import { ToolsDocService } from 'src/app/services/tools-doc.service';
import * as _ from 'lodash';

// 图标样式
import '../../../assets/icon/iconfont.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  @ViewChild('dragIcon') dragIcon: any;
  @ViewChild('siderDom') siderDom: any;

  constructor(private toolsDoc: ToolsDocService, protected route: Router) {}

  ngLogoImg = 'https://ng.ant.design/assets/img/logo.svg';
  lodashLogoImg = './assets/images/lodash-logo.png';
  isIndex: string | boolean = '';
  routeConfig: any;
  selectedValue = null;
  listOfGroupOption: any = [];
  // 侧边栏宽度自适应问题没解决;
  siderWidth = '260px';
  // 侧边栏的初始宽度； // Ps: 跟siderWidth值保持一致.
  initialSiderWidth = 260;
  toolsData = '';

  // mock MenuConfig
  mockAll = JSON.parse(JSON.stringify(all.MenuConfig));

  dragStartX = this.siderWidth;
  dragEndX: number = 0;

  ngOnInit(): void {
    // 获取左边menu的菜单栏详情
    this.routeConfig = all.MenuConfig;
    // search搜索;
    this.mockAll.map((val: any) => {
      return val.childRoute.map((v: any) => {
        v.groupLabel = val.title;
        v.label = v.exhibitStr;
        v.value = v.router;
        delete v.exhibitStr;
        delete v.router;
      });
    });
    // @ts-ignore
    this.listOfGroupOption = this.mockAll
      .flatMap((v: any) => v.childRoute)
      .filter((v: any) => v.label);

    // 初始化动画页面
    this.isIndex =
      window.location.pathname === '/index' ||
      window.location.pathname === '/JavaScript-tools-and-Lodash-tools/index' ||
      false;
  }

  ngAfterContentInit(): void {
    // 根据路由匹配tools内容
    this.matchUrl(window.location.pathname);
  }

  hideAnimationAndChooseTool(value: any) {
    window.location.hash = value.router.replace('/index/', '');

    const { functionName } = value;
    // @ts-ignore
    this.toolsData = this.toolsDoc[functionName]();
    this.isIndex = false;
  }

  goBack() {
    this.isIndex = true;
    this.route.navigateByUrl('/index');
  }

  trackFn(item: any) {
    return item.id;
  }

  search(value: any): void {
    if (value) {
      // hash重置
      window.location.hash = '';

      // 根据路由匹配tools内容
      this.matchUrl(value);

      // hash设置
      window.location.hash = value.replace('/index/', '');
    }
  }

  matchUrl(url: string) {
    if (url.includes('/index')) {
      // 鉴于ghpages 的路由跟本地路由不匹配，采取的折中方案。
      let formatUrl = url.replace('/JavaScript-tools-and-Lodash-tools', '');

      // 如果有hash
      if (window.location.hash) {
        formatUrl = formatUrl + window.location.hash.replace('#', '/');
      }

      // 获取当前url所匹配到的menuConfig数据
      let matchData = _.find(this.listOfGroupOption, function (o) {
        return o.value === formatUrl;
      });

      if (matchData) {
        // @ts-ignore
        this.toolsData = this.toolsDoc[matchData['functionName']]();
        this.isIndex = false;
      }
    }
  }

  // 动态改变menu宽度
  dragEnd(e: any): any {
    if (e.x <= this.initialSiderWidth) {
      this.siderWidth = this.initialSiderWidth + 'px';
      this.dragIcon.nativeElement.style.cssText = `left:${
        this.initialSiderWidth - 25 + 'px'
      }`;
      console.log('小于最小宽度!');
      return;
    }

    this.dragEndX = e.x - 25;

    this.dragIcon.nativeElement.style.cssText = `left:${this.dragEndX}px`;

    this.siderWidth = e.x + 'px';

    console.groupCollapsed(
      `%c屏幕宽度 & 拖拽所在位置`,
      'color:#36ab60; font-size: 14px;'
    );
    console.log(getComputedStyle(document.body).width, '&', this.siderWidth);

    const windowWidth = Number(
      getComputedStyle(document.body).width.replace('px', '')
    );

    // 限制最大宽度
    if (e.x / windowWidth >= 0.65) {
      this.siderWidth = windowWidth * 0.65 + 'px';
      this.dragIcon.nativeElement.style.cssText = `left:${
        windowWidth * 0.65 - 25 + 'px'
      }`;
      console.log('超过最大宽度!');
      return;
    }
  }
}
