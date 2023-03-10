function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, meal) {
 return {
  name: name,
  price: price,
  type: meal
 }
}

function addIngredients(toAdd, dataVar){
  ingredients = dataVar

  if(!ingredients.includes(toAdd)){
    ingredients.push(toAdd)
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


