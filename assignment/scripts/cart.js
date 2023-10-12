console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];


function addItem (item) {
    basket.push (item);
    return true;
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

//Stretch question 1
const maxItems = 5;

//stretch question 2
function isFull() {
    if (basket.length<maxItems) {
        return false;
    } else {
        return true;
    }
}


console.log("adding tomato is:", addItem('tomato')); //adding items back to test
console.log("The basket now includes:", basket);

console.log("adding spinach is:", addItem('spinach'));
console.log("The basket now includes:", basket);

console.log("adding burrata is:", addItem('burrata'));
console.log("The basket now includes:", basket);

console.log("The basket currently has", basket.length, "of", maxItems, "total items in it.");
console.log("The basket is currently full:", isFull());

console.log("adding pasta is:", addItem('pasta'));  //filling up the basket to test
console.log("The basket now includes:", basket);

console.log("adding EVOO is:", addItem('EVOO'));
console.log("The basket now includes:", basket);

console.log("The basket currently has", basket.length, "of", maxItems, "total items in it.");
console.log("The basket is currently full:", isFull());

//stretch item 3
//when I try to update addItem it errors out, how to update the function
basket.pop();

function addItem2 (item) {
    if (isFull()) {
        return false;
    }
    else {
        basket.push(item);
        return true;
    }
}

console.log(addItem2 ('mushrooms'));
console.log(basket);

function removeItem(item) {
    let index = basket.indexOf(item);
    if (index > 0){
        basket.splice(index, 1);
        return item
     } else {
        return null
     }
}

console.log(removeItem('pasta'));
console.log(basket);

console.log(removeItem('wine'));

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
