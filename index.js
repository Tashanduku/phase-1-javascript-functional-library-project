// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i], i, collection);
    }
    return collection;
}

// myMap
function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

// myReduce
function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let start = 0;

    if (acc === undefined) {
        acc = values[0];
        start = 1;
    }

    for (let i = start; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}

// myFind
function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
            return values[i];
        }
    }
    return undefined;
}

// myFilter
function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
            result.push(values[i]);
        }
    }
    return result;
}

// mySize
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys
function myKeys(obj) {
    return Object.keys(obj);
}

// myValues
function myValues(obj) {
    return Object.values(obj);
}

// Export the functions (for Node.js compatibility, optional)
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};
