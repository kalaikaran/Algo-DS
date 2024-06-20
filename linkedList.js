class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class SingleLinkedList {
  constructor(){
    this.head = null;
  }
  appendValue(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}
