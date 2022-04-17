import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventy-four',
  templateUrl: './util-seventy-four.component.html',
  styleUrls: ['./util-seventy-four.component.less']
})
export class UtilSeventyFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
