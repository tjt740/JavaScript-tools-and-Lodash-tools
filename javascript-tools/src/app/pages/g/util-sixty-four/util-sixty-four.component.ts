import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-four',
  templateUrl: './util-sixty-four.component.html',
  styleUrls: ['./util-sixty-four.component.less']
})
export class UtilSixtyFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
