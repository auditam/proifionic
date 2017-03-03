import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})

export class Page5 {
	
	items: any;
	loading: any;
	posts: any;

  constructor(public navCtrl: NavController, private news:News) {

  }
  ngOnInit(){
  this.getclubPosts();
  }
  getclubPosts(){
  	this.news.getclubPosts().subscribe(response =>{this.items=response
  });
}
}
