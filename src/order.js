function takeOrder(order, ticket){
  if(ticket.length < 3){
    ticket.push(order)}
}

function refundOrder(number, ticket){
  var order = ticket.findIndex(findOrder)
  
  function findOrder(order){
    return order.orderNumber === number
  }
  
  ticket.splice(order, 1)
}

function listItems(ticket){
  return ticket.map(function (order){
    return order.item
  }).join(", ")
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}