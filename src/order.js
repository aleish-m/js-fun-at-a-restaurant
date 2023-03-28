function takeOrder(order, ticket){
  if(ticket.length < 3){
    ticket.push(order)}
}

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}