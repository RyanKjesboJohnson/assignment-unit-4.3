console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item) {
    basket.push (item);
    return true
}


console.log("adding tomato is:", addItem('tomato'));
console.log("The basket now includes:", basket);

console.log("adding spinach is:", addItem('spinach'));
console.log("The basket now includes:", basket);

console.log("adding burrata is:", addItem('burrata'));
console.log("The basket now includes:", basket);

function listItems() {
    basket.forEach(item => 
    console.log(item, "is in the basket."));
    }

listItems();

function empty () {
    basket = [];    
}

empty();
console.log("the basket currently should be empty and has these items in it:", basket);








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
