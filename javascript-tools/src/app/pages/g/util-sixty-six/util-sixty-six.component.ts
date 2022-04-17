import { Component, OnInit } from '@angular/core';
import { ToolsDocService } from 'src/app/services/tools-doc.service';

@Component({
  selector: 'app-util-sixty-six',
  templateUrl: './util-sixty-six.component.html',
  styleUrls: ['./util-sixty-six.component.less']
})
export class UtilSixtySixComponent implements OnInit {

  initCode: string = '';
  constructor(
    public toolsDoc: ToolsDocService,
  ) {}

  ngOnInit(): void {
  }

}
