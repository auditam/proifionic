import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class News {
	   http:any;
     baseUrl: string;

  constructor(http:Http) {
    this.http=http;
    this.baseUrl='http://rugbyindonesia.or.id';
  }
  getnewsPosts(){
  return this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json').map(res => res.json());
  }
  getresPosts(){
  return this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json').map(res => res.json());
  }
  getphotoPosts(){
  return this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json').map(res => res.json());
  }
  getclubPosts(){
  return this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json ').map(res => res.json());
  }
  }

