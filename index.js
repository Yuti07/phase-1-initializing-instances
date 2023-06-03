// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert;
    }
  }

// Create a breakfast instance
const breakfast = new Breakfast('toast', 'coffee');
console.log(breakfast.food); // Output: toast
console.log(breakfast.drink); // Output: coffee

// Create a lunch instance
const lunch = new Lunch('green salad', 'tomato soup', 'iced tea');
console.log(lunch.salad); // Output: green salad
console.log(lunch.soup); // Output: tomato soup
console.log(lunch.drink); // Output: iced tea

// Create a dinner instance
const dinner = new Dinner('caesar salad', 'pumpkin soup', 'steak', 'chocolate cake');
console.log(dinner.salad); // Output: caesar salad
console.log(dinner.soup); // Output: pumpkin soup
console.log(dinner.entree); // Output: steak
console.log(dinner.dessert); // Error: Private field '#dessert' must be declared in an enclosing class
