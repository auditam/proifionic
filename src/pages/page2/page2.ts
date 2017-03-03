import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  
  items: any;
  loading: any;
  posts: any;

  constructor(public navCtrl: NavController, private news:News) {

  }
  ngOnInit(){
  this.getresPosts();
  }
  getresPosts(){
    this.news.getresPosts().subscribe(response =>{this.items=response;
  });
}
}
