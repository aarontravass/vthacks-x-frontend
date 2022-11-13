import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotpageComponent } from './botpage/botpage.component';
import { ChartsComponent } from './charts/charts.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'bot', component: BotpageComponent },
    { path: 'charts', component: ChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
