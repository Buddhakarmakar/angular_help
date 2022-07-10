import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {Router,ActivatedRoute,Params} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'test';
  constructor(
    private http:HttpClient,
    private auth:AuthService,
    private route:ActivatedRoute
    ){}
  myData="HI There"
  data=[
    "Hello",
    "HI",
    "How are you?"
  ]
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(data=>{
      console.log(data)
    })
   console.log( this.route.snapshot.params)
  }
  outputData(data:any){
    console.log(data)
  }
  fetchData(){
    // let d=this.http.get("assets/data.json")
    // if(typeof d ==undefined){
    //   console.log("Undefined")
    // }else{
    //   console.log("Get it")
    // }
    // d.subscribe(
    //   data=>{
    //     console.log(data)
    //   }
    // )
    this.auth.fetchData().subscribe(data=>{
      console.log(data)
    })

  }
}
