import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-three',
  templateUrl: './util-twenty-three.component.html',
  styleUrls: ['./util-twenty-three.component.less']
})
export class UtilTwentyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
