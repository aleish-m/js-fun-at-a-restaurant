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

function removeMenuItem(restaurant, itemName, menuType){
  itemIndex = restaurant.menus[menuType].findIndex(findMenuItem)

  function findMenuItem(item){
    return item.name === itemName
  }

  if(itemIndex != -1) {
    restaurant.menus[menuType].splice(itemIndex, 1)
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