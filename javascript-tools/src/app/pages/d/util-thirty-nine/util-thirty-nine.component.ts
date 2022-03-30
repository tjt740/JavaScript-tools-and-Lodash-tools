import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-nine',
  templateUrl: './util-thirty-nine.component.html',
  styleUrls: ['./util-thirty-nine.component.less']
})
export class UtilThirtyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
    this.initCode = this.toolsDoc.toFullScreen();
  }

}
