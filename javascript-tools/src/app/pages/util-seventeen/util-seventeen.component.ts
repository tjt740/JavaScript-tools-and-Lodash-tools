import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-seventeen',
  templateUrl: './util-seventeen.component.html',
  styleUrls: ['./util-seventeen.component.less']
})
export class UtilSeventeenComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
