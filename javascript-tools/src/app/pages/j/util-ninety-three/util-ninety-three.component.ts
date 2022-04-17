import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-three',
  templateUrl: './util-ninety-three.component.html',
  styleUrls: ['./util-ninety-three.component.less']
})
export class UtilNinetyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
