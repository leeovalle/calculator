// a method used in js to test a string against a regular expresion
function validateInput(input) {
    return /^\d+$/.test(input); //tests if the input consists of only digits and returns true if it does and false otherwise
}


function calculateResult() {// function to calculate the result based on selected operation
    // get the values from input fields
    var num1 = document.getElementById("num1").value.trim();
    var num2 = document.getElementById("num2").value.trim();
    var num3 = document.getElementById("num3").value.trim();
    var resultField = document.getElementById("Result");
    
    //an if statment to iterate through through input fields returinig a alert messagea
    if (!validateInput(num1) || !validateInput(num2) || !validateInput(num3)) {
        alert("Please enter integers only.");
        return;
    }
    
    // convert inputs to integers
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    
    //selects the operation
    var operation = document.querySelector('input[name="operation"]:checked').value;
    
    // performs the calculation based on the selected operation
    switch(operation) {
        case "Maximum":
            resultField.value = Math.max(num1, num2, num3); //calculates max
            break;
        case "Minimum":
            resultField.value = Math.min(num1, num2, num3); //calculates min
            break;
        case "Mean":
            resultField.value = (num1 + num2 + num3) / 3; //calculates mean
            break;
        case "Median":
            var nums = [num1, num2, num3];
            nums.sort(function(a, b){return a - b}); // calculates median
            resultField.value = nums[1];
            break;
        case "Range":
            var nums = [num1, num2, num3]; 
            nums.sort(function(a, b){return a - b}); // calculates range
            resultField.value = nums[2] - nums[0];
            break;
    }
}

// event listener for the "Run Calculation" button
document.getElementById("Calculate").addEventListener("click", function(event){
    event.preventDefault(); // prevent form submission
    calculateResult(); // call the calculateResult function
});
