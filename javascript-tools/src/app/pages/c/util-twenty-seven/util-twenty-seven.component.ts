import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-seven',
  templateUrl: './util-twenty-seven.component.html',
  styleUrls: ['./util-twenty-seven.component.less']
})
export class UtilTwentySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
    this.initCode = this.toolsDoc.getUrlInfo();
  }

}
