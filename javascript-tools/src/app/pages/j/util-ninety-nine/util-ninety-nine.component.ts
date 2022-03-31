import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-nine',
  templateUrl: './util-ninety-nine.component.html',
  styleUrls: ['./util-ninety-nine.component.less']
})
export class UtilNinetyNineComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
