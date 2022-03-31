import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-nine',
  templateUrl: './util-sixty-nine.component.html',
  styleUrls: ['./util-sixty-nine.component.less']
})
export class UtilSixtyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
