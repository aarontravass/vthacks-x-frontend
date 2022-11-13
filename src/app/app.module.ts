import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './charts/charts.component';
import { RouterModule, Routes } from '@angular/router';
import {} from './botpage/botpage.component'
const routes:Routes =[
    { path: '', component: AppComponent },
    { path: 'bot', component: BotpageComponent },
    { path: 'charts', component: ChartsComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        BotpageComponent,
        ChartsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {
            useHash: false, 
            scrollPositionRestoration: 'enabled',
            enableTracing: true
        });
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
