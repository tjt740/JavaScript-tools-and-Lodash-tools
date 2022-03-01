import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-two',
  templateUrl: './util-thirty-two.component.html',
  styleUrls: ['./util-thirty-two.component.less']
})
export class UtilThirtyTwoComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}


  ngOnInit(): void {
  }

}
