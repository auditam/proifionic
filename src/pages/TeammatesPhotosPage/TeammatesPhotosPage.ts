import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';
import {Camera} from 'ionic-native';

@Component({
  selector: 'page-TeammatesPhotosPage',
  templateUrl: 'TeammatesPhotosPage.html'
})

export class TeammatesPhotosPage {
	
  imageURL
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

  takePhoto(){
    Camera.getPicture().then((imageData) =>
    {let base64Image = 'data:image/jpeg;base64,' + imageData;
    },(err)=>{
      console.log(err);
    })
  }
}
