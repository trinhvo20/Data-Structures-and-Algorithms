/* 
Build a custom array in JS
*/
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; // Object
    }
    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index]
        this._shiftItems(index);
        return item;
    }

    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}


// MAIN
const newArray = new MyArray();
console.log(newArray);

newArray.push('a');
newArray.push('b');
newArray.push('c');
console.log(newArray);

newArray.delete(1);
console.log(newArray);