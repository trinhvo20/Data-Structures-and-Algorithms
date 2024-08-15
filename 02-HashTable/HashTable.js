/*
Build a Hash Table in JS
*/

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
        return this.data;
    }

    get(key) {
        let index = this._hash(key);
        const bucket = this.data[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
                
                if (this.data[i].length > 1) {
                    for (let j = 1; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                }
            }
        }
        return keysArray;
    }
}

// ==========================================================
// MAIN
const myHashTable = new HashTable(10);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('bananas', 23);
myHashTable.set('strawberries', 0);
console.log(myHashTable);

console.log(myHashTable.get('bananas'));

console.log(myHashTable.keys());