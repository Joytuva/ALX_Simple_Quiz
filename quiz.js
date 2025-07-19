function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Handle the case when no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    // Step 4: Get the value of the selected option
    const userAnswer = selectedOption.value;

    // Step 5: Compare user answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
