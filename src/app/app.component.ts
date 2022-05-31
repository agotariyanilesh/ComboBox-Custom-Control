import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <input id="ac" type="checkbox" kendoCheckBox [(ngModel)]="allowCustom" />
      <label for="ac">Allow custom values</label>
    </div>
    <div class="example">
      <span>Favorite sport:</span>
      <kendo-combobox [data]="listItems" [allowCustom]="allowCustom">
    </kendo-combobox>
    </div>
  `,
  styles: [`
    .example {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    kendo-combobox {
      width: 170px
    }

    #ac, span {
      margin-right: 15px;
    }

    label {
      margin: 0;
    }
  `]
})
export class AppComponent {
  public allowCustom = true;
  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
  ];
}
