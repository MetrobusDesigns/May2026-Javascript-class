const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {

  const wheatBread  = document.getElementById('wheat-bread');
  const lettuce     = document.getElementById('lettuce');
  const tomato      = document.getElementById('tomato');
  const peppers     = document.getElementById('peppers');
  const turkey      = document.getElementById('turkey');
  const swissCheese = document.getElementById('swiss-cheese');
  const mustard     = document.getElementById('mustard');

  const allIngredients = [wheatBread, lettuce, tomato, peppers, turkey, swissCheese, mustard];

  let selectedIngredients = [];

  allIngredients.forEach(function(ingredient) {
    if (ingredient.checked) {
      selectedIngredients.push(ingredient.id);
    }
  });

  if (selectedIngredients.length === 0) {
    alert('Please select at least one ingredient!');
    return;
  }

  alert('Your sandwich contains: ' + selectedIngredients.join(', '));

});