// console.log('JS ready');
let employeeList = [];

$(document).ready(readyNow);

function readyNow() {
    // console.log('DOM ready');

    // capture click event for submit button
    $('#submit-button').on('click', addEmployee);
    
}

function addEmployee() {
    console.log('in addEmployee');

    // set input values to variables
    let newFirstName = $('#add-first-name').val();
    let newLastName = $('#add-last-name').val();

    // created new object
    let newEmployee = {newFirstName, newLastName};
    console.log(`first and second inputs are: 
                ${newFirstName}, ${newLastName}`);
    console.log(newEmployee);
    employeeList.push(newEmployee); 

    // newEmployee object is in the array!
    console.log(employeeList);

    // clears inputs
    // newFirstName.val(''); !work, not a function? huh?
    $('#add-first-name').val(''); // works!
    $('#add-last-name').val('');

    // call function to run it!
    displayEmployee();
}

function displayEmployee() {
    console.log('in displayEmployee');
    
}