import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-eight',
  templateUrl: './util-ninety-eight.component.html',
  styleUrls: ['./util-ninety-eight.component.less']
})
export class UtilNinetyEightComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
