import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  getUsers(): Hero[] {
    return HEROES;
  }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`https://jsonplaceholder.typicode.com/posts/${term}`)
               .map(response => 
               //console.log('response',response)
               response.json() as Hero[]);
  }
}
