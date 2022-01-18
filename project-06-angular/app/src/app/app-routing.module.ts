import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DoDontComponent } from './do-dont/do-dont.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'prevention', component: PreventionComponent},
  {path: 'treatment', component: TreatmentComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'news', component: NewsComponent},
  {path: 'doDont', component: DoDontComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
