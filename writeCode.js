//Sum Zero
//Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

//Code Here
function sumZero(arr) {

    if (arr.length === 0 || arr.length === 1) {
        return 'false';
    }

    for (let i=0; i < arr.length-1;i++) {
        for (let j=i+1; j < arr.length;j++) {
            if (arr[i] + arr[j] === 0) {
                return 'true';
            }
        }
    }

    return 'false';
}
let numArr1 = [8, 4, 6, 9]
let numArr2 =[2, 0, -2, 1]

// console.log(sumZero(numArr1))

//the j= i+1 means that you're not going to compare i to itself. it moves to the next iterator and use that one.

//Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//Code Here
function uniqueChar(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
// console.log(uniqueChar('hello'))

//Panagram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

//Code Here
function isPangram(sentence) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let lowercase = sentence.toLowerCase()
    for (i=0; i <alpha.length; i++) {
       let test = false
        for(j=0; j<lowercase.length; j++) {
            if (alpha[i] === lowercase[j]) {
                test = true
                }
            }
            if (test === false) {
              return test
        }
    }
    return true
}
let pangram = ('The quick brown fox jumps over the lazy dog')
let pangram2 = ('This string will fail')

console.log(isPangram(pangram2))
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

console.log(longestWord(sentence))