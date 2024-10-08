function getComputerChoice(max) {
    let result = Math.floor(Math.random() * max);
    // console.log('result: ', result);
    if (result === 0) {
        console.log("Rock")
    } else if (result === 1) {
        console.log("Paper")
    } else { 
        console.log("Scissors")
    }
}
console.log(getComputerChoice(3))