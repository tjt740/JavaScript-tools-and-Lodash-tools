import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-forty-nine',
  templateUrl: './util-forty-nine.component.html',
  styleUrls: ['./util-forty-nine.component.less']
})
export class UtilFortyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.sortItemArray();
  }

}
