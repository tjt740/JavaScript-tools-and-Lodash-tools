import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-eight',
  templateUrl: './util-sixty-eight.component.html',
  styleUrls: ['./util-sixty-eight.component.less']
})
export class UtilSixtyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
