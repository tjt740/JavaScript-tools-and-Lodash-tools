import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-eight',
  templateUrl: './util-twenty-eight.component.html',
  styleUrls: ['./util-twenty-eight.component.less'],
})
export class UtilTwentyEightComponent implements OnInit {
  initCode: string = '';
  constructor(public toolsDoc: ToolsDocService) {}

  ngOnInit(): void {

    this.urlAddParams({
      name: '谭金涛',
      work: 'IT',
    })



  }

  urlAddParams(obj: {} | any) {
    let params = [];
    for (let key in obj) {
      params.push(`${key}=${obj[key]}`);
    }
    return encodeURIComponent(params.join('&'));
  }


  replaceParamVal(paramName: string, replaceWith: string) {
    const oUrl = location.href.toString();
    const re = eval('/('+ paramName+'=)([^&]*)/gi');
    location.href = oUrl.replace(re,paramName+'='+replaceWith);
    return location.href;
 }
}
