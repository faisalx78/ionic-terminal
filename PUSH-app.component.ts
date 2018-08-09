import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


import { Page1Page } from '../pages/page1/page1';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = Page1Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushSetup();
    });
  }

  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID: '123456789',
        sound: 'true',
        vibrate: 'true'
      },
      ios: {
         
          alert: 'true',
          badge: true,
          sound: 'true'
        }
        
     };
     
     const pushObject: PushObject = this.push.init(options);
     
     
     pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
     
     pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
     
     pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
  }
