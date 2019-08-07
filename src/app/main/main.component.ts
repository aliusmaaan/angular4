import { Component, OnInit } from '@angular/core';
import { ApiService } from '../APIs/api.service';
import { Hero } from '../APIs/hero';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  [x: string]: any;
  color: string;
  heroes:Array<Hero>;
  Users:Array<Hero>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }
  
  getPromisData() {

  this.apiService.getHeroes().then(heroes => this.heroes = heroes);
  console.log('this.heroes', this.heroes );
}
getMockData() {
  this.Users = this.apiService.getUsers();
  console.log('this.Users', this.Users );
}
getApiData() {
  this.apiService.search('1').subscribe(
    data => {
      this.Assigns = [];
    this.Assigns.push(data);
    },
    error => console.log('error',error)
  );
}

}
