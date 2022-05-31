import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent implements OnInit {
  constructor() {
    //this.loadDataString(this.listItems);
    this.loadDataKeyValue(this.source);
  }

  ngOnInit() {}

  public IsAllowCustom = true;
  public IsFilterable = false;

  public source: Array<{ text: string; value: number }> = [
    { text: 'Small', value: 1 },
    { text: 'Medium', value: 2 },
    { text: 'Large', value: 3 },
  ];

  public comboData: Array<{ text: string; value: any }>;

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

  public loadDataString(data: Array<string>): void {
    this.comboData = data.map((val) => ({
      text: val,
      value: val,
    }));
  }

  public loadDataKeyValue(data: Array<{ text: string; value: any }>): void {
    this.comboData = data.slice();
  }
}
