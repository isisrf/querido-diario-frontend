import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

interface Option {
  value: string;
  viewValue: string;
}

interface Options {
  options: Option[];
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements OnInit {
  @Input()
  label: string | undefined = undefined;

  @Input()
  title: string | undefined = undefined;

  @Input()
  theme: string = 'theme-light';

  @Output() onSelected = new EventEmitter<string>();

  @Input()
  selected: any;

  selectControl = new FormControl({});

  constructor() {}

  @Input()
  options: Option[] = [];

  selectedOption: { value: string; viewValue: string } = {
    value: 'relevance',
    viewValue: 'Relevância',
  };

  ngOnInit(): void {
    if (this.selected) {
      this.selectControl = new FormControl(this.selected);
    }
  }

  selectionChange(value: string) {
    this.onSelected.emit(value);
  }
}
