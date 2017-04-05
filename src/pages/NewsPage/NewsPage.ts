import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-NewsPage',
  templateUrl: 'NewsPage.html'
})

export class NewsPage {
	
	items: any;
	loading: any;
	posts: any;

  constructor(public navCtrl: NavController, private news:News) {

  }
  ngOnInit(){
  this.getnewsPosts();
  }
  getnewsPosts(){
  	this.news.getnewsPosts().subscribe(response =>{this.items=response;
  });
}
}
