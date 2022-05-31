import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public IsAllowCustom = true;
  public IsFilterable = false;
  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
  ];

  public valueChange(value: any): void {
    console.log(value);
  }
}
