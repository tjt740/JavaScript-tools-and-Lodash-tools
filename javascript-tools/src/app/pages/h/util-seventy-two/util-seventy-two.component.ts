import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-two',
  templateUrl: './util-seventy-two.component.html',
  styleUrls: ['./util-seventy-two.component.less']
})
export class UtilSeventyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
