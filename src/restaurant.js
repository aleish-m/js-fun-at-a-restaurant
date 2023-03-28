function createRestaurant(name){
  return{
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, meal){
  if (!restaurant.menus[meal.type].includes(meal)){
    restaurant.menus[meal.type].push(meal)
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}