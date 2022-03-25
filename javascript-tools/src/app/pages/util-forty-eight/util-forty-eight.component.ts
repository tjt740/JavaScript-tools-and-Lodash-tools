import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-forty-eight',
  templateUrl: './util-forty-eight.component.html',
  styleUrls: ['./util-forty-eight.component.less']
})
export class UtilFortyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.isArray();
  }

}
