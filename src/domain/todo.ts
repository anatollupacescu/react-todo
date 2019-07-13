interface Item {
  text: string
  done: boolean
}

class TodoObject {

  items: Item[]

  constructor(public existingItems: Item[]) {
    this.items = [];
    if(existingItems) {
      this.items = existingItems;
    }
  }

  addItem(itemText: string) {
    this.items.push({ text: itemText, done: false })
  }

  toggleItemDoneStatus(item: Item) {
    let updatedItems = this.items.map(original => {
      if(item.text === original.text) {
        return { text: original.text, done: !original.done }
      }
      return original
    })

    this.items = updatedItems
  }
}

export default TodoObject;
