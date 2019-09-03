import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  // ts
  myForm: FormGroup;

  //private publie = service
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      title: '',
      ingredients: this.fb.array([]),
      method: this.fb.array([]),
      notes: this.fb.array([])
    })

  //subscribe = observable rxjs
  this.myForm.valueChanges.subscribe(console.log)

  }
  //getter
  //INGREDIENTS
  get ingredientForms() {
    return this.myForm.get('ingredients') as FormArray
  }

  addIngredient() {
    const ingredient = this.fb.group ({
      name: [],
      amount: [],
    })
    this.ingredientForms.push(ingredient)
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i)
  }

  //METHODS
  get methodForms() {
    return this.myForm.get('method') as FormArray
  }

  addMethod() {
    const method = this.fb.group ({
      step: []
    })
    this.methodForms.push(method)
  }

  deleteMethod(i) {
    this.methodForms.removeAt(i)
  }

  //Notes
  get notesForms() {
    return this.myForm.get('notes') as FormArray
  }

  addNote() {
    const note = this.fb.group ({
      sideNote: []
    })
    this.notesForms.push(note)
  }

  deleteNote(i) {
    this.notesForms.removeAt(i)
  }
}
