import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eight',
  templateUrl: './util-eight.component.html',
  styleUrls: ['./util-eight.component.less']
})
export class UtilEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
    this.initCode = this.toolsDoc.getKebabCase();
  }

}
