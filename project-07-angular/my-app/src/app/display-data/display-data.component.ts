import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionsService } from '../api-functions.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  db;

  constructor(private data: ApiFunctionsService, private route: Router) {
    // this.db = this.data.getData();
    // console.log(this.db);
    this.data.getData().subscribe(data => {
      this.db = data;
    })
  }

  ngOnInit(): void {
  }

  return(){
    this.route.navigateByUrl('finalProject/getData');
  }

  delete(e){
    var myTarget = e.target;
    if(e.target.tagName == 'I'){
      myTarget = myTarget.parentElement;
    }
    this.data.deleteData(myTarget.parentElement.parentElement.firstChild.innerHTML);

    this.data.redirectNavigate('finalProject/displayData');
  }

}
