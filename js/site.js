// Get elements from the page
const btnRun = document.querySelector('#btnSubmit');
const resultsTable = document.querySelector('#results');

// Get the values from the page
// Controller function(s)
function getValues() {
    // Get values from the page
    let startValue = document.querySelector('#startValue').value;
    let endValue = document.querySelector('#endValue').value;

    // Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate startValue and endValue
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Call generateNumbers
        const numbers = generateNumbers(startValue, endValue);
        // Call displayNumbers
        displayNumbers(numbers);
    } else {
        // Inform user about error
        alert("You must enter numbers!");
    }
}

// Generate numbers from startValue to endValue
// logic function(s)
function generateNumbers(startNum, endNum) {
    const numbersArray = [];

    // This will execute in a lopp until index(startNum) = endNum
    for (let i = startNum; i <= endNum; i++) {
        // Append i value to numbers array
        numbersArray.push(i)
    }

    return numbersArray;
}

// Display the numbers and mark even numbers bold
// Display/view function(s)
function displayNumbers(numbers) {

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        
        let number = numbers[i];

        let className = (number % 2 == 0) ? "even" : "odd";

        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    resultsTable.innerHTML = templateRows;

}

btnRun.addEventListener('click', getValues);