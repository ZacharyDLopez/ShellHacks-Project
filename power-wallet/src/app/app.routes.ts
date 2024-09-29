import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Component, NgModule } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Question1Component } from './question-1/question-1.component';
import { Question2Component } from './question-2/question-2.component';
import { Question3Component } from './question-3/question-3.component';
import { Question4Component } from './question-4/question-4.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'question-1', component: Question1Component},
    {path: 'question-2', component: Question2Component},
    {path: 'question-3', component: Question3Component},
    {path: 'question-4', component: Question4Component},
    {path: 'results', component: ResultsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule {}
