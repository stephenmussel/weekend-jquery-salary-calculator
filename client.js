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
    employeeList.push(newEmployee); 

    // newEmployee object is in the array!
    console.log(employeeList);

    // clears inputs
    // newFirstName.val(''); !work, not a function? huh?
    $('#add-first-name').val(''); // works!
    $('#add-last-name').val('');

    // call function to run it!
    addEmployeeToTable();
}

function addEmployeeToTable() {
    console.log('in addEmployeeToTable');
    console.log(employeeList);
    
    // setting first object property in array to a variable
    let newFirstName = employeeList[0].newFirstName;
    console.log(newFirstName);

    let rowClass = '';
    $('#employees-table-body').append(`
        <tr class="${rowClass}">
            <td>${newFirstName}</td>
            <td><button>delete</button></td>
        </tr>`)
}
