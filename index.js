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

let arr = [5, 5, 5, 7, 3, 5, 8, 2, 9, 7, 4, 14, 71, 45, 71]
let dupe = []
let single = []
let indexes = []

arrySort(arr);

function arrySort(array){
    // sorts array from smallest to largest
    let temp = array.sort(function(a,b){return a-b})

    // finds al numbers that are duplicated
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    // removes duplicates of duplicates
    let dupesArray = [...new Set(filtered)];

    // gets the numbers that are duplicated into dupe array
    for ( let num of dupesArray) {
        let number = num;
        for (let i=0; i<temp.length; i++){
            if (number === temp[i]){
                dupe.push(temp[i]);
            }
        }
    }
    // gets single numbers into single array
    for( let num of temp ){
        let number = num
        if (dupesArray.includes(number)){

        } else {
            single.push(number)
        }
    }
    // combines both arrays
    console.log('final', [...dupe,...single]);
}

fizzBuzz(15);

const family = ['Justin', 'Natalie', 'Bentley'];

function fizzBuzz(n) {
    console.log('hacker');
    // Write your code here
    for ( let i=1; i<n.length; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz')
        } else if (i%3===0){
            console.log('Fizz')
        } else if (i%5===0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

setTimeout(displayFamily, 100)

function displayFamily() {
    console.log('my family', family);
    document.getElementById("start-seq").innerHTML = "My Fam " + family.join(", ");
}

// anagram test
// Write a function that takes in two words and see if they are anagrams

function anagramTest(word1, word2){
    let firstWord = [...word1];
    let secondWord = [...word2];
    let difference = 0;

    if (firstWord.length === secondWord.length){
        for ( let letter of firstWord ){
            if( secondWord.includes(letter) ){

            } else {
                difference++;
            }
        }
    } else {
        difference++
    }

    if ( difference === 0 ){
        console.log('its an anagram!');
    } else {
        console.log("not an anagram");
    }
}

anagramTest('Fast', 'Fats');
anagramTest('Fast', 'Feast');
anagramTest('Fast', 'Race');