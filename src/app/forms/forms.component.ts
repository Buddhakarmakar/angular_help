import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    // password:new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(8)
    // ])
  })
  handleSubmit(){
    console.log(this.myForm.valid)
  }
}
