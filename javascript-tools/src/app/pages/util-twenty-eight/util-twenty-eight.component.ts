import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-eight',
  templateUrl: './util-twenty-eight.component.html',
  styleUrls: ['./util-twenty-eight.component.less']
})
export class UtilTwentyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
  }

}
