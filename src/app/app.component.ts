import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names!: string[];
  acceptedNames = [];

  private readonly namesDB = [
    'Maksim',
    'Good Kat',
    'Patrick O\'Brian'
  ];

  constructor() {
    this.names = [ ...this.namesDB ];
  }

  onDragStart(event: DragEvent) {
    const elem = event.target as HTMLElement;

    if (elem) {
      event.dataTransfer.setData(
        'text/plain',
        elem.attributes.getNamedItem('ng-reflect-name').value
      );
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    const name = event.dataTransfer.getData('text');

    this.names = this.names.filter(na => na !== name);
    this.acceptedNames = [
      ...this.acceptedNames,
      name
    ];

    event.dataTransfer.clearData();
  }

  onClick() {
    this.names = [ ...this.namesDB ];
    this.acceptedNames = [];
  }
}
