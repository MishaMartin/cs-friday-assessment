//Sum Zero
//Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

//Code Here
function trueZero(num){
    let sum
    for(let i=0; i<num.length; i++){
        let num1 = num[i]
        let num2 = num[i]
        console.log(num1)
        console.log(num2)
    }
}
//Solution:
let numArr = [4, 5, 10, 6]
let numArr2 = [2, 0 , -2 , 8]

trueZero(numArr)

//Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//Code Here

//Panagram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

//Code Here

//Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
//Space complexity for this one is O(n)

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            console.log(longest)
            word = str;
            console.log(word)
        }
    });

return word;
}

sentence = ("I enjoy eating pasta")

let answer = longestWord(sentence)

console.log(answer)