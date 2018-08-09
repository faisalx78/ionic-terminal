import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('email') email;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: '',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
     this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.setRoot( HomePage );
    })
    .catch(error => {
      console.log('error', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.email.value, this.password.value);
  }

}
