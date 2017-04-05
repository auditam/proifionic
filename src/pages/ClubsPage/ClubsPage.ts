import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-ClubsPage',
  templateUrl: 'ClubsPage.html'
})

export class ClubsPage {
	
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
