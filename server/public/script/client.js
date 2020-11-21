$(document).ready(function () {
    console.log('jQuery sourced.');
    $('#btn-submit').on('click', handleSubmit);
    $('#taskLog').on('click', '.btn-delete', deleteTask);
    $('#taskLog').on('click', '.btn-do', readTask);
    refreshTask();
});

function handleSubmit() {
    console.log('Submit button clicked.');
    let msg = {
        task: $('#input-1').val()
    }
    addTask(msg);
}

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

function deleteTask(event) {
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
        refreshTask();
    }).catch((error) => {
        console.log('error from db', error);
        res.sendStatus(500);
    })
}

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

function renderTasks(tasks) {
    console.log('Rendering task to DOM');
    $('#taskLog').empty();
    // loop through parameter to append to table on DOM
    for (let i = 0; i < tasks.length; i++) {
        let message = tasks[i];
        console.log('--------', message.status);
        let $tr = $(`<tr class="${message.status}"></tr>`);
        $tr.data('message', message);
        $tr.append(`<td>${message.task}</td>`);
        $tr.append(`<td><button class="btn-delete">Delete</button></td>`);
        if (message.status === 'Incomplete') {
            $tr.append(`<td><button class="btn-do">Complete</button></td>`);
        } else {
            $tr.append(`<td><button class="btn-do">Mark as Incomplete</button></td>`);
        }
        $('#taskLog').append($tr);
    }
}

