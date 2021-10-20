/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { LocalStorageService} from './booking-system/services/local-storage.service';
import { AuthService } from './booking-system/services/auth.service';
import { AuthGuardService } from './booking-system/services/auth.guard';
import { UserService } from './booking-system/services/user.service';

import { LoginComponent } from './booking-system/components/login/login.component';
import { RegisterComponent } from './booking-system/components/register/register.component';
import { PlacesToGoComponent } from './booking-system/components/places-to-go/places-to-go.component';
import { BookedPlacesComponent } from './booking-system/components/booked-places/booked-places.component';
import { PlaceComponent } from './booking-system/components/place/place.component';
import { BookedPlaceComponent } from './booking-system/components/booked-place/booked-place.component';
import { LogoutComponent } from './booking-system/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PlacesToGoComponent,
    BookedPlacesComponent,
    PlaceComponent,
    BookedPlaceComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    LocalStorageService,
    AuthService,
    AuthGuardService,
    UserService
  ],
})
export class AppModule {
}
