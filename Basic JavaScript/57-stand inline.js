//In Computer Science a queue is an abstract Data Structure where items are kept in order.
//New items can be added at the back of the queue and old items are taken off from the front of the queue.

function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
  }
  
 