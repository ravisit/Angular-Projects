import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent {

  @Input() list:any[]=[];

  @Output() shareCheckedList = new EventEmitter<Array<string>>();
  @Output() shareIndividualCheckedList = new EventEmitter<{}>();

  checkedList : string[] =[];
  currentSelected={};
  showDropDown=false;
  showList=false;
  constructor(){
    this.checkedList = [];
  }

  getSelectedValue(status:boolean, value:string){
      if(status){
        this.checkedList.push(value);
      } else{
        let index = this.checkedList.indexOf(value);
        this.checkedList.splice(index, 1);
        this.showList=false;
      }

      //share checked list
      this.shareCheckedlist();

      //share individual selection
      this.shareIndividualStatus();
  }

  getAllItems() {
    if (this.showList) {
      if (this.checkedList.length === 0) {
        this.list.forEach((item) => {
          this.checkedList.push(item.name);
          item.checked = true;
        });
      } else {
        let dummy:any = [];
        this.list.forEach((item) => {
          dummy.push(item.name);
        });
        let unique = [...new Set([...dummy, ...this.checkedList])];
        this.checkedList = [];
        this.checkedList = unique;
        this.list.forEach((item) => {
          item.checked = true;
        });
       
      }
    } else {
      this.list.forEach((item) => {
        this.checkedList = [];
        item.checked = false;
      });
    }
     //share checked list
     this.shareCheckedlist();
  }

  shareCheckedlist(){
    this.shareCheckedList.emit(this.checkedList);
  }

  shareIndividualStatus(){
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }

}
