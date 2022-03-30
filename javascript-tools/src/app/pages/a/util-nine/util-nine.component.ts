import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-nine',
  templateUrl: './util-nine.component.html',
  styleUrls: ['./util-nine.component.less']
})
export class UtilNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.getCamelCase();
  }

}
