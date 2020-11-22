$(document).ready(function () { // anonymous function: function with no name
// console.log('jQuery sourced.'); // this let's us know JQ is working, commented out 
// click handler events for buttons
    $('#btn-submit').on('click', handleSubmit);
    $('#taskLog').on('click', '.btn-delete', deleteTask);
    $('#taskLog').on('click', '.btn-do', readTask);
// running function with ajax-get call to update our data upon refresh
    refreshTask();
});

// function to grab input form values
function handleSubmit() {
    console.log('Submit button clicked.');
// store values into an object
    let msg = {
        task: $('#input-1').val()
    }
// invoke addTask function, which will take object
// and send it to server POST 
    addTask(msg);
}

// ajax post grabs our object of data and sends it to server
// after server sends it to our database, THEN it comes back here as a response
function addTask(taskToAdd) {
    $.ajax({
        type: 'POST',
        url: '/messages',
        data: taskToAdd,
    }).then(function (response) {
        console.log('Response from server.', response);
        refreshTask();
    }).catch(function (error) {
        console.log('Error in POST', error)
        alert('Unable to add task at this time. Please try again later.');
    });
}

// function to delete tr when delete button clicked on
function deleteTask(event) {
// because I used form, must utilizie event.preventDefault(); 
    event.preventDefault();
    console.log('Deleting task....');
// create variable to store closest tr
    let task = $(this).closest('tr').data('message');
// console logging selected task
    console.log('Task selected is:', task);
// empty tr we just selected
    $(this).closest('tr').empty();
// this ajax call deletes the data we pass in to delete on ${task.id}
    $.ajax({
            method: 'DELETE',
            url: `/messages/${task.id}`
        })
        .then(function (response) {
            refreshTask();
        })
        .catch(function (error) {
            console.log('Error', error);
            alert('Try again.');
        })
}

// this function updates our data
function readTask(event) {
    event.preventDefault();
// console.log('did a task');
    let tasks = $(this).closest('tr').data('message');
    console.log(`changing status of ${tasks.message}...`);
    $.ajax({
        method: 'PUT',
        url: `/messages/${tasks.id}`,
        data: {
            status: tasks.status
        }
    }).then(function (response) {
        refreshTask(); // allows us to see most up to date data
    }).catch((error) => {
        console.log('error from db', error);
        res.sendStatus(500);
    })
}

// function to get data
function refreshTask() {
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then(function (response) {
        console.log(response);
        renderTasks(response);
    }).catch(function (error) {
        console.log('error in GET', error);
    });
}

// function to render data onto DOM
function renderTasks(tasks) {
    console.log('Rendering task to DOM');
    $('#taskLog').empty();
    // loop through parameter to append to table on DOM
    for (let i = 0; i < tasks.length; i++) {
    // storing all values of into variable
        let message = tasks[i];
        console.log('--------', message.status); // ensuring our status shows on console for testing purposes
    // storing our tr with a class of ${message.status} into an array
     // task is another class added to this tr for styling purposes
        let $tr = $(`<tr class="${message.status} task"></tr>`);
    // creating btnText as an empty string so we can manipulate this upon clicking button
    // depending on the status coming back from database (reliant on conditional create on server side)?
        let btnText = '';
    // create conditional, if status is equal to 'Incomplete'
    // btnText must say 'Complete, otherwise button text must say 'Incomplete'
        if (message.status === 'Incomplete') {
            btnText = 'Complete';
        } else {
            btnText = 'Incomplete'
        }
    // data.() allows us to attach data of any sort to DOM
    // if utilizing this tr, must use message. 
        $tr.data('message', message);
        $tr.append(`<td>${message.task}</td>`);
    // appending to tr, a div with td for easier styling.
        $tr.append(`
        <div class="buttons">
        <td>
            <button class="btn-delete">Delete</button>
        </td>
        <td><button class="btn-do ${message.status} task">Mark as ${btnText}</button>
        </td>
        </div>`);
    // appending to tbody, tr created
        $('#taskLog').append($tr);
    }
}


// QUESTION, what is recommended for me to 