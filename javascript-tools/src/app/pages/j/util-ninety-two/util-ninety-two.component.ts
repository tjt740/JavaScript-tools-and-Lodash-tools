import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-two',
  templateUrl: './util-ninety-two.component.html',
  styleUrls: ['./util-ninety-two.component.less']
})
export class UtilNinetyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
