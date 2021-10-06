import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionsService } from '../api-functions.service';
import { User } from '../models/users'

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  maxLenForPos = 10;
  user = new User();

  constructor(private db: ApiFunctionsService, private route: Router) { }

  ngOnInit(): void {
  }

  send(){
    this.db.postData(this.user);
    this.route.navigateByUrl('/finalProject/displayData');
  }

}
