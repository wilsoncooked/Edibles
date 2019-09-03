export interface Recipe {
    id: string;
    title: string;
    ingredients: Ingredient[];
    methods: string[];
}

export interface Ingredient {
    name: string;
    amount: string;
}
