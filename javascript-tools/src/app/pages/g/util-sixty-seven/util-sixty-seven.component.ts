import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-seven',
  templateUrl: './util-sixty-seven.component.html',
  styleUrls: ['./util-sixty-seven.component.less']
})
export class UtilSixtySevenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
