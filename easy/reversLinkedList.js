const reverseList = (head) => {
    let previous = null // Initializing values 
    let current = head  //the starting point
    while(current) {
        const next = current.next;  //gets the next value from the current node
        current.next = previous;    //Sets the next value of the current node to be previous, on first iteration prev = null, on second prev = 1, prev = 2 ...
        previous = current;         //Set previous to current node, so in the next iteration the new current node can point to the previous current node
        current = next;             //set the new current as the node that the previous curent was point to
    }
    return previous
}