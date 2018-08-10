##### انشاء مشروع جديد
```
ionic start
```
##### اضافة صفحة للاتصال بالسيرفر
```
ionic g provider authService
```
##### اضافة صفحة جديدة
```
ionic generate page login
```
##### تثبيت الاضافة الخاصة بالفايربيس
```
npm install firebase angularfire2 --save
```
##### انشاء مفتاح جديد لتطبيق الاندرويد
```
keytool -genkey -v -keystore key.keystore -alias key -keyalg RSA -keysize 2048 -validity 10000
```
##### تثبيت اضافة الاشعارات
```
ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=123456789
```
##### حذف اضافة من المشروع
```
ionic cordova plugin rm phonegap-plugin-push
```
##### الانتقال لصفحة اخرى
```
login(){
    this.navCtrl.push(LoginPage);
  }
```
##### الكود الخاص بالفايربيس
file `app.module.ts`
```
  const firebaseAuth = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
```
##### اضافة زر في الهيدر
`ion-buttons end` OR `ion-buttons start`
```
<ion-buttons end>
    <button on-click="goToPage10()" ion-button icon-only><ion-icon name="md-wifi"></ion-icon></button>
</ion-buttons>
<ion-title>
    title
</ion-title>
```
##### اضافة خلفية للصفحة
```
<ion-content padding style="background:url(assets/img/bg.jpg) no-repeat center;background-size:cover;" id="page2" dir="rtl">
```
##### زر الخروج
```
logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }
  ```
