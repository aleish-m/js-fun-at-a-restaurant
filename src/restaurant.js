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
    item.name === itemName
  }

  restaurant.menus[menuType].splice(itemIndex,1)
  return `No one is eating our ${itemName} - it has been removed from the breakfast menu!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}