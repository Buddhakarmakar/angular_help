import { Component, OnInit ,Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input()data:any
  @Output() outputData:EventEmitter<any>=new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  handleClick(){
    this.outputData.emit(this.data)
  }
}
