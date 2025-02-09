// console.log('JS ready');
let employeeList = [];
let totalAnnualCost = 0;
let totalMonthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    // console.log('DOM ready');
    // capture click event for submit button
    // #1 this method adds to click handler you know won't be removed
    $('#submit-button').on('click', addEmployee);
    // capture click evnet for delete button
    
    // what is this?
    // console.log($(this));
    // $(selector).on(event, filter, functionToCall) 
    // if 'delete-button' clicked then call function, if something else clicked function not called
    // #2 adding click handler to something that didn't exist (delete-button) when page loaded requires you to attach
    // it to something that does exist (employees-table-body), then specifiy what doesn't exist yet
    // on the page (delete-button)
    $('#employees-table-body').on('click', '.delete-button' , deleteEmployee);
}

function deleteEmployee() {
    console.log('in deleteEmployee');
    // console.log($(this));
    // $(this).text('you clicked the button');
    let employeeRow = $(this).parent().parent();
    employeeRow.remove();
    // $(this).remove();
}

function addEmployee() {
    console.log($(this));
    console.log('in addEmployee');
    // set input values to variables
    let newFirstName = $('#add-first-name').val();
    let newLastName = $('#add-last-name').val();
    let newID = $('#add-id').val();
    let newTitle = $('#add-title').val();
    let newAnnualSalary = $('#add-annual-salary').val();

    // created new object
    let newEmployee = { newFirstName, newLastName, newID, newTitle, newAnnualSalary };
    // console.log(`newEmployee info: ${newFirstName}, ${newLastName}, ${newID}, ${newTitle}, ${newAnnualSalary}`);
    employeeList.push(newEmployee);
    console.table(newEmployee);

    // newEmployee object is in the array!
    console.table(employeeList);

    // BUT it still pushes empty inputs into objects and arrays
    if (newFirstName.length === 0 || newLastName === 0 || newID === 0 || newTitle === 0 || newAnnualSalary === 0) {
        $('#add-first-name').attr('placeholder', 'FILL in first name');
        $('#add-last-name').attr('placeholder', 'FILL in last name');
        $('#add-id').attr('placeholder', 'FILL in ID');
        $('#add-title').attr('placeholder', 'FILL in title');
        $('#add-annual-salary').attr('placeholder', 'FILL in annual salary');
        return false;
    } else {
        // do nothing
    }

    // clears inputs
    $('#add-first-name').val('');
    $('#add-first-name').attr('placeholder', 'first name');
    $('#add-last-name').val('');
    $('#add-last-name').attr('placeholder', 'last name');
    $('#add-id').val('');
    $('#add-id').attr('placeholder', 'ID');
    $('#add-title').val('');
    $('#add-title').attr('placeholder', 'title');
    $('#add-annual-salary').val('');
    $('#add-annual-salary').attr('placeholder', 'annual salary');


    // call function to run it!
    displayEmployeeOnTable();
}
function displayEmployeeOnTable() {
    // console.log('in displayEmployeeOnTable');
    // console.log(employeeList);

    // empties previous inputs
    let tableElement = $('#employees-table-body');
    tableElement.empty();

    // need to loop this and append to table
    for (i = 0; i < employeeList.length; i++) {
        let newFirstName = employeeList[i].newFirstName;
        let newLastName = employeeList[i].newLastName;
        let newID = employeeList[i].newID;
        let newTitle = employeeList[i].newTitle;
        // let newAnnualSalary = employeeList[i].newAnnualSalary; 
        let newSalary = parseInt(employeeList[i].newAnnualSalary);
        let currencyConverter = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });

        // console.log(newFirstName, newLastName, newID, newTitle, newSalary);
        let newCurrency = currencyConverter.format(newSalary);

        let rowClass = '';
        $('#employees-table-body').append(`
        <tr class="${rowClass}">
            <td>${newFirstName}</td>
            <td>${newLastName}</td>
            <td>${newID}</td>
            <td>${newTitle}</td>
            <td>${newCurrency}</td>
            <td><button class="delete-button">delete</button></td>
        </tr>`);
        
    }

    /**
     * hardcoded test 1 test employee
     */

    // let newLastName = employeeList[0].newLastName;
    // let newID = employeeList[0].newID;
    // let newTitle = employeeList[0].newTitle;
    // let newAnnualSalary = employeeList[0].newAnnualSalary;
    // let salaryNumber = parseInt(newAnnualSalary);
    // console.log(newFirstName, newLastName, newID, newTitle, salaryNumber);

    // let rowClass = '';
    // $('#employees-table-body').append(`
    //     <tr class="${rowClass}">
    //         <td>${newFirstName}</td>
    //         <td>${newLastName}</td>
    //         <td>${newID}</td>
    //         <td>${newTitle}</td>
    //         <td>${salaryNumber}</td>
    //         <td><button>delete</button></td>
    //     </tr>`)

    calculateMonthlyCost();
}
function calculateMonthlyCost() {
    // console.log('inside calculateMonthlyCost');
    console.log('total monthly cost start: ', totalMonthlyCost); // testing for start value

    //loop thru employeeList array
    for (let i = 0; i < employeeList.length; i++) {
        totalAnnualCost = Number(employeeList[i].newAnnualSalary); // converts to number
    } // end for
    totalMonthlyCost += totalAnnualCost / 12;

    let currencyConverter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    let convertedTotalMonthlyCost = currencyConverter.format(totalMonthlyCost);
    $('#total-monthly-out').html(convertedTotalMonthlyCost);

    if (totalMonthlyCost > 20000) {
        // hightlights output and changes text color
        $('#total-monthly-out').css({ 'background-color': '#FA5A77', 'color': '#FFFFFF' });
    } else {
        // do nothing
    }

    console.log('total monthly cost end: ', totalMonthlyCost); // testing for end value
    
} // end calculateMonthlyCost