import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-nineteen',
  templateUrl: './util-nineteen.component.html',
  styleUrls: ['./util-nineteen.component.less']
})
export class UtilNineteenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.delCookie();
  }

}
