import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-eighty-six',
  templateUrl: './util-eighty-six.component.html',
  styleUrls: ['./util-eighty-six.component.less']
})
export class UtilEightySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
