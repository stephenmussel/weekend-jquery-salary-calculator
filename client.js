// console.log('JS ready');
let employeeList = [];
let totalAnnualCost = 0;
let totalMonthlyCost = 0;

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
    let newID = $('#add-id').val();
    let newTitle = $('#add-title').val();
    let newAnnualSalary = $('#add-annual-salary').val();

    // created new object
    let newEmployee = { newFirstName, newLastName, newID, newTitle, newAnnualSalary };
    console.log(`all the inputs: ${newFirstName}, ${newLastName}, ${newID}, ${newTitle}, ${newAnnualSalary}`);
    employeeList.push(newEmployee);
    console.table(newEmployee);

    // newEmployee object is in the array!
    console.table(employeeList);

    // clears inputs
    // newFirstName.val(''); !work, not a function? huh?
    $('#add-first-name').val(''); // works!
    $('#add-last-name').val('');
    $('#add-id').val('');
    $('#add-title').val('');
    $('#add-annual-salary').val('');

    // call function to run it!
    displayEmployeeOnTable();
}

function displayEmployeeOnTable() {
    // console.log('in displayEmployeeOnTable');
    // console.log(employeeList);

    // need to loop this and append to table
    for (i = 0; i < employeeList.length; i++) {
        let newFirstName = employeeList[i].newFirstName;
        let newLastName = employeeList[i].newLastName;
        let newID = employeeList[i].newID;
        let newTitle = employeeList[i].newTitle;
        let newAnnualSalary = employeeList[i].newAnnualSalary; 
        // console.log(newFirstName, newLastName, newID, newTitle, newAnnualSalary);

        totalAnnualCost += Number(employeeList[i].newAnnualSalary); // converts to number
        // totalAnnualCost += salaryNumber;
        totalMonthlyCost = totalAnnualCost / 12;
        // $('#total-monthly-out').html(totalAnnualCost);
        $('#total-monthly-out').html(totalMonthlyCost);

        let rowClass = '';
        if (totalMonthlyCost > 20) {
            rowClass = 'warning';
        } else {
            // do nothing
        }
        
        $('#employees-table-body').append(`
        <tr class="${rowClass}">
            <td>${newFirstName}</td>
            <td>${newLastName}</td>
            <td>${newID}</td>
            <td>${newTitle}</td>
            <td>${parseInt(employeeList[i].newAnnualSalary)}</td>
            <td><button>delete</button></td>
        </tr>`)
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

    // calculateMonthlyCost();
}

// function calculateMonthlyCost() {
//     // console.log('inside calculateMonthlyCost');
//     // console.log('monthly start: ', totalMonthlyCost); // testing for start value

//     //loop thru employeeList array
//     for (let i = 0; i < employeeList.length; i++) {
//         totalAnnualCost += Number(employeeList[i].newAnnualSalary); // converts to number
//     } // end for
//     totalMonthlyCost = totalAnnualCost / 12;
//     $('#total-monthly-out').html(totalMonthlyCost);

//     let rowClass = '';
//     if (totalMonthlyCost > 20) {
//         rowClass = 'warning';
//     } else {
//         // do nothing
//     }

    // $('#employees-table-body').append(`
    //     <tr class="${rowClass}">
    //         <td>${parseInt(employeeList[i].newAnnualSalary)}</td>
    //         <td><button>delete</button></td>
    //     </tr>`)
    // console.log('monthly end: ', totalMonthlyCost); // testing for end value

// } // end calculateMonthlyCost
