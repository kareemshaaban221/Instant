import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  val: string;
  list: string[] = [];
  valid: boolean = true;
  cond;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.val && this.val.length <= 25 && this.val.length >= 8) {
      this.list.push(this.val);
      let addMsg = document.querySelector('#addMsg-todoList');
      addMsg.classList.remove('d-none');
      addMsg.classList.remove('op-0');
      setTimeout(() => {
        addMsg.classList.add('op-0');
        setTimeout(() => {
          addMsg.classList.add('d-none');
        }, 300);
      }, 3000)
      return true;
    }
    else {
      if (!this.val) {
        this.cond = 1;
      }
      else {
        if (this.val.length < 8) {
          this.cond = 2;
        }
        else {
          this.cond = 3;
        }
      }
      return false;
    }
  }

  remove(e) {
    let wantToRemove = e.target.parentElement;
    // console.log(wantToRemove); // testing
    let removeMsg = document.querySelector('#removeMsg-todoList');
    removeMsg.classList.remove('d-none');
    removeMsg.classList.remove('op-0');
    setTimeout(
      () => {
        removeMsg.classList.add('op-0');
        setTimeout( // transition duration delay
          () => {
            removeMsg.classList.add('d-none');
          }, 300);
      }, 3000);

    wantToRemove.remove();
  }

  checked(e) {
    let myTarget = e.target;
    if(e.target.tagName == 'DIV'){
      myTarget = myTarget.parentElement;
    }

    myTarget.classList.toggle('bg-darker');
    myTarget.classList.toggle('bg-dark');
  }

}
