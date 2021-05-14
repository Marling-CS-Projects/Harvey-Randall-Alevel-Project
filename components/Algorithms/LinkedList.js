import LinkedItem from "./LinkedItem";
import { DataStructure } from "../../common";
export default class LinkedList extends DataStructure {
    constructor() {
        super();
        this.startItem;
        this.length = 0;
    }
    *[Symbol.iterator]() {
        let cItem = this.startItem;
        while (cItem) {
            yield cItem.getValue();
            cItem = cItem.getNextItem();
        }
    }
    toArray() {
        const arr = [];
        for (const i of this) {
            arr.push(i);
        }
        return arr;
    }
    /*eslint complexity: ["error", 20]*/
    insert(index, item) {
        let inserted = false;
        const newItem = new LinkedItem(item);
        if (index === 0) {
            newItem.setNextItem(this.startItem);
            this.startItem = newItem;
            inserted = true;
        } else {
            let tIndex = 1;
            let currentItem = this.startItem;
            while (currentItem) {
                if (tIndex === index) {
                    newItem.setNextItem(currentItem.getNextItem());
                    currentItem.setNextItem(newItem);
                    inserted = true;
                    break;
                }
                tIndex += 1;
                currentItem = currentItem.getNextItem();
            }
        }
        if (inserted) {
            this.length += 1;
            this.tickVersion();
        }
        return inserted;
    }
    get(index) {
        let tIndex = 0;
        let cItem = this.startItem;
        while (cItem) {
            if (tIndex === index) {
                return cItem.getValue();
            }
            cItem = cItem.getNextItem();
            tIndex += 1;
        }
        return;
    }
    append(item) {
        const newItem = new LinkedItem(item);
        if (this.startItem) {
            let currentItem = this.startItem;
            while (currentItem.getNextItem()) {
                currentItem = currentItem.getNextItem();
            }
            currentItem.setNextItem(newItem);
        } else {
            this.startItem = newItem;
        }
        this.length += 1;
        this.tickVersion();
    }
    /**
     * Removes
     * @param {function} matchFunction Returns true for the object being removed
     * @returns The removed item
     */
    removeMatch(matchFunction) {
        let removed;
        let index = 0;
        let cItem = this.startItem;
        while (cItem) {
            if (matchFunction(cItem.getValue())) {
                removed = this.remove(index);
                break;
            }
            cItem = cItem.getNextItem();
            index += 1;
        }
        this.tickVersion();
        return removed;
    }
    /**
     * Remove an item in a specific position
     * @param {number} index The index of the object to remove
     * @returns The removed item
     */
    /*eslint complexity: ["error", 20]*/
    remove(index) {
        let removed;
        if (index === 0) {
            if (this.startItem) {
                removed = this.startItem.getValue();
                this.startItem = this.startItem.getNextItem();
            }
        } else {
            let tIndex = 1;
            let currentItem = this.startItem;
            while (currentItem.getNextItem()) {
                if (tIndex === index) {
                    const toRemove = currentItem.getNextItem();
                    if (toRemove) {
                        removed = toRemove.getValue();
                        currentItem.setNextItem(toRemove.getNextItem());
                        break;
                    }
                }
                currentItem = currentItem.getNextItem();
                tIndex += 1;
            }
        }
        if (removed) {
            this.length -= 1;
            this.tickVersion();
        }
        return removed;
    }
    toString() {
        // return [this].reduce((acc, curr) => (acc += ` ${curr.getValue()}`), "");
        const arr = [];
        for (const i of this) {
            arr.push(i);
        }
        return arr.join(" ");
    }
}
