class TodoObject {
  constructor(existingItems) {
    this.items = [];
    if (existingItems) {
      this.items = existingItems;
    }
   }
   
   addItem(itemText) { 
      this.items.push({ text: itemText})
   }
   
   toggleItemDoneStatus(item) {
    let updatedItems = this.items.map(i => {
      if (item.text === i.text) {
        return { text: i.text, done: !i.done}
      }
      return i
    })
    
    this.items = updatedItems
   }
}

export default TodoObject;
