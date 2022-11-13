import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './charts/charts.component';
import { BotpageComponent } from './botpage/botpage.component';
import { HomepageComponent } from './homepage/homepage.component'


@NgModule({
    declarations: [
        AppComponent,
        BotpageComponent,
        ChartsComponent,
        HomepageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppRoutingModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
