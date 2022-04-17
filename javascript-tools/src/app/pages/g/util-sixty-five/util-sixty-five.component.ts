import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-five',
  templateUrl: './util-sixty-five.component.html',
  styleUrls: ['./util-sixty-five.component.less']
})
export class UtilSixtyFiveComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
