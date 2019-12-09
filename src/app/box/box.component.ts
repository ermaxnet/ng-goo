import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {
  @Input() name!: string;
  @Input() @HostBinding('class.box--green') isAccepted = false;
  @HostBinding('class.box') isBox = true;

  constructor() { }

  ngOnInit() {
  }

}
