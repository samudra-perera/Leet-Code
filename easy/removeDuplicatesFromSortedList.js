// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

//Sorted Linked List

const deleteDuplicates = (head) => {
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
    //First node in the list
    let cur = head;
    //Check cur and next 
    //While not null
    while(cur && cur.next){
        //if the value of the current node is === to the next node
        if(cur.val == cur.next.val) {
            //Move the reference of the current node to the node after the duplicate
            cur.next = cur.next.next
        } else {
            //Else move current to the next node
            cur = cur.next
        }
    }
    return head
}