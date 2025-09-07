# Mock Data

## products.json

Simulates API responses for the Burger Builder App’s ingredient data. Used for frontend development and testing.

### Structure

- **buns**: Array of bun ingredients.
- **meats**: Array of meat ingredients.
- **vegetables**: Array of vegetable ingredients.
- **cheeses**: Array of cheese ingredients.
- **sauces**: Array of sauce ingredients.

Each ingredient has the following properties except for the buns ingredient:

- `id`: Unique identifier (integer).
- `name`: Ingredient name (string).
- `image`: Path to image asset (string, e.g., `assets/buns/sesame.png`).
- `price`: Cost per ingredient (number, in Naira).

buns ingredient has:

- `id`: Unique identifier (integer).
- `name`: Ingredient name (string).
- `topImage`: Path to image (string, e.g., `assets/buns/sesame-top.png`).
- `bottomImage`: Path to image (string, e.g., `assets/buns/sesame-bottom.png`).
- `price`: Cost per ingredient (number, in Naira).