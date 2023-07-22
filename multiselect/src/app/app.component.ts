import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'multiSelect';

  list:{name:string,checked:boolean}[]=[
    {name :'India',checked : false},
    {name :'US',checked : false},
    {name :'China',checked : false},
    {name :'France',checked : false}
  ];

  constructor(){
    // this.list = 
    //   [
    //     {name :'India',checked : false},
    //     {name :'US',checked : false},
    //     {name :'China',checked : false},
    //     {name :'France',checked : false}
    //   ]
  }

  shareCheckedList(item:Array<string>){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }
}
