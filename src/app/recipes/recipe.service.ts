import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'}) 
export class RecipeService {
    recipes$: Observable<Recipe[]>;

    constructor(private db: AngularFirestore) {
        this.recipes$ = db.collection<Recipe>('recipes').valueChanges({idField: 'id'});
    }

    

}

// return this.db.doc<User>(`users/${user.uid}`).valueChanges()
