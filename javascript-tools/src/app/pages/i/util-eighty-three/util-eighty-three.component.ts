import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-three',
  templateUrl: './util-eighty-three.component.html',
  styleUrls: ['./util-eighty-three.component.less']
})
export class UtilEightyThreeComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
