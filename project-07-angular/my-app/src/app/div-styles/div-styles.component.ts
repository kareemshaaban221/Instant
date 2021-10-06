import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-styles',
  templateUrl: './div-styles.component.html',
  styleUrls: ['./div-styles.component.css']
})
export class DivStylesComponent implements OnInit {

  wid;
  hei;
  bg;

  constructor() { }

  ngOnInit(): void {
  }


  setWid(val){
    this.wid = val;
  }
  getWid(){
    return this.wid+'px';
  }

  setHei(val){
    this.hei = val;
  }
  getHei(){
    return this.hei+'px';
  }

  setBg(val){
    this.bg = val;
  }
  getBg(){
    return this.bg;
  }

}
