import { assert } from 'chai';
import 'mocha';
import TodoObject from './todo';

describe('given a new ToDo Object', () => {
    let obj: TodoObject = new TodoObject([])

    it('should have empty items', () => {
        assert.equal(obj.items.length, 0)
    })
});

describe('when create a new TODO object with default items', () => {
    let obj: TodoObject = new TodoObject([{ text: '', done: false }])

    it('should store the items', () => {
        assert.equal(obj.items.length, 1)
    })
})

describe('given a new ToDo object', () => {
    let obj: TodoObject = new TodoObject([])

    describe('when an item is added', () => {

        obj.addItem("new item")

        it('should add the item to the collection', () => {
            assert.equal(obj.items.length, 1)
        })

        it('should save the item with the provided text', () => {
            let got = obj.items[0];
            assert.deepEqual(got.text, 'new item')
        })

        it('should save the item with active status', () => {
            let got = obj.items[0];
            assert.deepEqual(got.done, false)
        })
    })
})

describe('given a ToDo object with an active item', () => {
    let got = {
        text: 'test', done: false
    }
    let obj: TodoObject = new TodoObject([got])

    describe('when the item is marked as done', () => {

        obj.toggleDone(got)

        it('should update item "done" status', () => {
            let got = obj.items[0];
            let expect = {
                text: 'test', done: true
            }
            assert.deepEqual(got, expect)
        })
    })
})

describe('given a ToDo object with a set of items', () => {
    let got = [
        { text: 'test', done: false },
        { text: 'sample', done: true }
    ]
    let obj: TodoObject = new TodoObject(got)

    describe('when a duplicate text is added', () => {
        let added = obj.addItem('sample')

        it('should return false', () => {
            assert.isFalse(added)
        })

        it('should not save item', () => {
            assert.equal(obj.items.length, 2)
        })
    })
})
