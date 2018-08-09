import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
// import { ResetPage } from '../reset/reset';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;
  
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: '',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('hello');
      this.navCtrl.setRoot( HomePage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.email.value, this.password.value);
  }

  //reset(){
  //  this.navCtrl.push(ResetPage);
 // }

}
