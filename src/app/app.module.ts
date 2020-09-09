import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// enables http services
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterSearchComponent } from './character-search/character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MessagesComponent,
    DashboardComponent,
    CharacterSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
