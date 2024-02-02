function guessCheck() {
    let number = parseInt(document.getElementById("guessed").value);
    let result = document.getElementById("result");
    let minimum = 1;
    let maximum = 100;
    let randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    if (randomNumber === number) {
        result.textContent = "Congratulations...! You guessed the right Number.";
    } else {
        result.textContent = `OOPS..! Try Again, Your Guess is Wrong The Number is ${randomNumber}`;
    }
}


