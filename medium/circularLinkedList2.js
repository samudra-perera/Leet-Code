//142
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

const detectCycle = (head) => {
    if(!head) return null       //Edge cases where if head does not exist or the first element in the list points to null
    if(!head.next) return null
    
    let fast = head             //Fast and slow are used to determine if the linked list is infact circular 
    let slow = head
    let pointer = head          //pointer will be used to determine the node where the end of the list points back to
    
    while(fast && fast.next) {  //if fast or fast.next == null break from the loop
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) break  //if fast == slow we know there is a loop 
    }
    
    if(fast !== slow) return null   //if fast && fast.next == null that means the link is not circular
    
    while(pointer !== slow) {       //if the list is circular start pointer from the beginning of the list, and increment...due to the nature of the lists they will intesect at the node of interest
        slow = slow.next
        pointer = pointer.next
    }
    
    return slow
    
};