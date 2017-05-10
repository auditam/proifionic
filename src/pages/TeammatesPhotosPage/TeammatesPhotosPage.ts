import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController, Nav } from 'ionic-angular';
import { News } from '../../providers/News';
import { Camera, File} from 'ionic-native';
import { Http } from '@angular/http';
import { PhotoEditor } from '../PhotoEditor/PhotoEditor';

declare var cordova: any;

@Component({
  selector: 'page-TeammatesPhotosPage',
  templateUrl: 'TeammatesPhotosPage.html'
})

export class TeammatesPhotosPage {
	
  public base64Image: string;

  lastImage: string = null;
	items: any;
	path:string = null;
  navi: any;

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  public http: Http,
  public toastCtrl: ToastController,
  public loadingController: LoadingController,
  public nav: Nav) {
    this.navi = nav;
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.items = res.json());
    console.log(this.items);
  }

  takePhoto(){
    console.log(cordova.file);

    var options = {
      quality:50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };

    Camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.lastImage = this.base64Image;
      this.navCtrl.push(PhotoEditor, {base64: this.lastImage});
    },(err) => {
      console.log(err);
    });
  }

  gallery(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 400,
      targetHeight: 400
    };

    Camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/png;base64,' + imageData;
      this.lastImage = this.base64Image;
      this.navCtrl.push(PhotoEditor, {base64:this.lastImage});
    }, (err) => {
      console.log(err);
    });
  }
}
