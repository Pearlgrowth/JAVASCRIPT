let randomNumber =  Math.floor(Math.random * 10)
function number(guessedNumber){
    if(guessedNumber == randomNumber){
        console.log('Good Work')
    }
    else{
        console.log('Not matched')
    }
    return guessedNumber
}
console.log(number(3));