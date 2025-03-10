// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    } else {
      crust.classList.remove("crust-gluten-free");
    }
  
}

function renderButtons() {
  let activeBtns = document.querySelectorAll(".btn");
  
  activeBtns.forEach((btn) => {
    if(btn.dataset.active === true){
      btn.classList.add("active");
    }else {
      btn.classList.remove("active");
    }
  });

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  const panelPrice = document.querySelectorAll("panel price li");
  let activeBtns = document.querySelectorAll(".btn").hasClass('active');
  listItems.forEach(listItem => {
    listItem.parentNode.removeChild(listItem);
  });
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMushrooms = document.querySelector('.btn.btn-mushrooms');
btnMushrooms.onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
btnGreenPeppers.onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnSauce = document.querySelector('.btn.btn-sauce');
btnSauce.onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(); 
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnCrust = document.querySelector('.btn.btn-crust');
btnCrust.onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});