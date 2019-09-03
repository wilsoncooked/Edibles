import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipes/recipe-view/recipe-view.component';
import { HomeComponent } from './home-page/home/home.component';
import { LoginFormComponent } from './auth/login-form/login-form.component'

const routes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component:HomeComponent},
  { path: 'list', component:RecipeListComponent},
  { path: ':recipeId/view', component:RecipeViewComponent},
  { path: 'login', component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent, RecipeListComponent, RecipeViewComponent, LoginFormComponent
]
