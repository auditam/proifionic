import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-FixturesResultPage',
  templateUrl: 'FixturesResultPage.html'
})

export class FixturesResultPage {
  
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
