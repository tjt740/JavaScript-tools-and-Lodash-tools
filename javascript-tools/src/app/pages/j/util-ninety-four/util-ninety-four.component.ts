import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-four',
  templateUrl: './util-ninety-four.component.html',
  styleUrls: ['./util-ninety-four.component.less']
})
export class UtilNinetyFourComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
