import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService {

  apiLink: string = "http://localhost:3000/users";

  constructor(private createLink: HttpClient, private route: Router) { }

  redirectNavigate(url: string){
    this.route.navigateByUrl('fakePath').then(()=>{
      this.route.navigateByUrl(url);
    });
  }

  getData() {
    // let dataContainer;
    // this.createLink.get(this.apiLink).subscribe(data => {
    //   dataContainer = data;
    //   console.log(dataContainer);
    // });
    
    // return dataContainer;

    return this.createLink.get(this.apiLink);
  }

  postData(dataObject) {
    this.createLink.post(this.apiLink, dataObject).subscribe(data => { });
  }

  deleteData(id){
    this.createLink.delete(this.apiLink+'/'+id).subscribe(data => { });
  }
}