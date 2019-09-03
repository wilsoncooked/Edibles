import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  public recipe$: Observable<Recipe>
  constructor(private route: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('recipeId');
    // this.recipeId = id;

    this.recipe$ = this.route.params.pipe(
      switchMap(param => {
        const id = param.recipeId;
        return this.db.collection('recipes').doc<Recipe>(id).valueChanges()
      })
    )

  }

}


