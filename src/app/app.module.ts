import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsernavbarComponent } from './Navigations/usernavbar/usernavbar.component';
import { DocternavbarComponent } from './Navigations/docternavbar/docternavbar.component';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,UsernavbarComponent,DocternavbarComponent],
  imports: [BrowserModule,
     IonicModule.forRoot()
     , AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     ReactiveFormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
