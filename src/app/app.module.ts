import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipe-list/recipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'recipe-list',      component: RecipeListComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RecipeListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})








export class AppModule { }
