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
  mealIndex = checkMenuItem(restaurant, meal.type, meal.name)
  if (mealIndex === -1){
    restaurant.menus[meal.type].push(meal)
  }
}

function checkMenuItem(restaurant, menuType, itemName){
  menu = restaurant.menus[menuType]
  function findMenuItem(item) {
    return item.name === itemName
  }
  return menu.findIndex(findMenuItem)
}


function removeMenuItem(restaurant, itemName, menuType){
  mealIndex = checkMenuItem(restaurant, menuType, itemName)

  if (mealIndex != -1) {
    restaurant.menus[menuType].splice(mealIndex, 1)
    return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
  } else {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
  
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}