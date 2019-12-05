import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() name!: string;
  @Input() @HostBinding('class.box--green') isAccepted = false;
  @HostBinding('class.box') isBox = true;

  constructor() { }

  ngOnInit() {
  }

}
