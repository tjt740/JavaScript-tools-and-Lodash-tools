import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-three',
  templateUrl: './util-seventy-three.component.html',
  styleUrls: ['./util-seventy-three.component.less']
})
export class UtilSeventyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
