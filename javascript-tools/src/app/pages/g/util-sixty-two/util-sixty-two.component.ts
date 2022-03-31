import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-two',
  templateUrl: './util-sixty-two.component.html',
  styleUrls: ['./util-sixty-two.component.less']
})
export class UtilSixtyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
