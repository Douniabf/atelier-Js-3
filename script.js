function sayHello(firstName) {
    if (firstName == "") {
        console.log("Hello Words");
    } else {
        console.log("Hello" + firstName);
        }

    }

    sayHello("");


    function fizzBuzz (number){
        if(number %3 === 0 ){
            console.log("Fizz")
        }
        else if(number %5 === 0) {
            console.log("Buzz")
        }
        else if (number %3===0 && number %5===0){
            console.log("FizzBuzz")
        }
        else{
            return number.toString()
        }
    }

   console.log(fizzBuzz(3))
console.log(fizzBuzz(15))

const chiffre = [1,2,3,4,5,6,7,8,9,10]
function inverse(number2) {
    if (number2 === number2) {
        return number2.map(chiffre => -chiffre)}
        else {
            console.log("hello")
        }
}


console.log(inverse(chiffre));

function odd (impair) {
    return impair.filter(chiffre => chiffre % 2 !== 0)

}

console.log(odd(chiffre));