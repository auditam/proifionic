import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})

export class Page3 {
	
	items: any;
	loading: any;
	posts: any;

  constructor(public navCtrl: NavController, private news:News) {

  }
  ngOnInit(){
  this.getphotoPosts();
  }
  getphotoPosts(){
  	this.news.getphotoPosts().subscribe(response =>{this.items=response;
  });
}
}
