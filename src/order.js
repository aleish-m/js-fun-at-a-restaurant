function takeOrder(order, ticket){
  if(ticket.length < 3){
    ticket.push(order)}
}

function refundOrder(number, ticket){
  function findOrder(order){
    return order.orderNumber === number
  }
  var order = ticket.findIndex(findOrder)
  ticket.splice(order, 1)
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}