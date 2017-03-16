import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {TaskListPage} from '../pages/tasklist/tasklist';
import { AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDwwyuYEpcO0p2xVlfBQmo3DyXSH-RiJLo",
  authDomain: "ionic2do-8b3c0.firebaseapp.com",
  databaseURL: "https://ionic2do-8b3c0.firebaseio.com",
  storageBucket: "ionic2do-8b3c0.appspot.com",
  messagingSenderId: "255226071695"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
