import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-twenty-nine',
  templateUrl: './util-twenty-nine.component.html',
  styleUrls: ['./util-twenty-nine.component.less']
})
export class UtilTwentyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
  }

}
