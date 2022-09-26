//141
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

const hasCycle = (head) => {
    let fast = head
    let slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) return true
    }
    return false
}

//How this solution works 
//Essentially there are two pointer, one fast and one slow
//The fast pointer is two times away from slow 
//if fast is ever equal to null or points to null we know that the linked list does not have a loop
//if the list has a loop eventually fast will relap the list and catch up to the slow pointer and the will have the same node value