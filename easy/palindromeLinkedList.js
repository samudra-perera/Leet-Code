//234 
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

//Helper function to reverse a linked List
const reverse = head => {
    let current = head;
    let prev = null;
    let next;
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}

const isPalindrome = (head) => {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0  //Will hold the length of the midpoint

    while(fast && fast.next) {  //This while loop is to find the mid point of the linkedList
        fast = fast.next.next
        slow = slow.next
        length++
    }

    let mid = reverse(slow)  //According to the way linked lists work, the slow variable will land right at the midpoint of the list

    while(length) {     //Will have the length of the midpoint
        length--        //Decreement the length
        if(mid.val !== startPointer.val) return false   //if the value of the midpoint list (reverse) and the beginning list dont equal return false
        mid = mid.next 
        startPointer = startPointer.next
    }
    return true
}