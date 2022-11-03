console.log('hello');

// FizzBuzz problem
let input = 15;
let output = []

function fizzcalc(int) {
    for (let i = 1; i<=int; i++) {
        if (i%3===0 && i%5===0){
            output.push('FizzBuzz');
        } else if ( i%5===0 ){
            output.push('Buzz')
        } else if ( i%3===0 ){
            output.push('Fizz')
        } else {
            output.push(i)
        }
    }
    console.log(output);
}

fizzcalc(input);

// binary tree and inverting one

// This answer doesn't work but working on it still.
let root = [4,2,7,1,3,6,9]
let inverse = []

var invertTree = function(root) {
    let level = 1
    for( let i=0; i<root.length; i++){
        if (i>0){
            for (let j=(level*2); j>i-1; j--){
                if (root[j]===undefined){

                } else {
                    inverse.push(root[j]);
                }
            };
            level++;
        } else {
            inverse.push(root[i]);
        }
    }
    console.log(root);
    console.log(inverse)
};

invertTree(root);

// array sorting and inverting

