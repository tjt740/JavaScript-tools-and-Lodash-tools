import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-thirty-seven',
  templateUrl: './util-thirty-seven.component.html',
  styleUrls: ['./util-thirty-seven.component.less'],
})
export class UtilThirtySevenComponent implements OnInit {
  initCode: string = '';
  constructor(public toolsDoc: ToolsDocService) {}

 ngOnInit(): void {

 }
}
