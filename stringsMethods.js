// // // match() Method
// // The match() method matches a string against a regular expression 

// // The match() method returns an array with the matches.

// // The match() method returns null if no match is found.
// // 


// Method 1: .match("") > matches you to the string you are searching for using a string
Example:
let sent1 = 'The dog was thoroughly eaten by the OGre';
str.match("og")
// og will be the output at index 5


// Method 2: match(/'/') > searches using a regular expression
Example:
let sent ='The dog was thorougly eaten by the OGre'
str.match(/og/)
// og will be the output at index 5

// Method 3: match(/''/g) > a global search for the string you are looking for
Example:
let sent2 = 'The dog was thorougly eaten by the OGre og'
str.match(/og/g)
// two ogs will be found in the sentence

// Method 4: match(/''/gi) > a global case insensitive search
Example:
let str = 'The dog was thorougly eaten by the OGre og'
str.match(/og/gi)
// all ogs will be the output including the capital OG in OGre

// matchAll method values returns an iterator of all results matching this string against a regular expression, including capturing groups.
Example:
const sentence = '/t(e)(st(/d?))/g'
const text2 = 'This pretty girl got lost'
const array = [text2.matchAll(sentence)]
console.log(array[0])

// replace()method The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
Example:
let line = "This is Kamau's book"
console.log(line.replace("Kamau's" , "Collins'"))
// Kamau's will be replaced by Collins' and the output will be : This is Collins' book


// repeat() method > The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
Example:
let mood = 'tired'
console.log(`I feel ${mood.repeat(10)}`);
// Output will be : I feel tired with the word tired repeated 10 times
