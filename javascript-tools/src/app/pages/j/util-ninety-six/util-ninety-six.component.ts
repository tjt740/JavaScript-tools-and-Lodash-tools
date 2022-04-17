import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-ninety-six',
  templateUrl: './util-ninety-six.component.html',
  styleUrls: ['./util-ninety-six.component.less']
})
export class UtilNinetySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
