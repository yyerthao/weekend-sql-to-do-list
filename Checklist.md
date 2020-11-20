GOAL: Create an application with a to do list for users to utilize 

### NODE.JS
[x] - npm init -y
[] - npm install express
[] - npm install jquery
[] - npm install pg

### DATABASE
[] - 
[] - 
[] - 
[] - 

### HTML
[] - header
[] - h1
[] - h2
[] - table
[] - 


### CLIENT
[] - function clickHandlers
[] - function  handleMessage
            - create object with values from input field
            - (ajax post)
[] - function deleteMessage 
            - (ajax delete)
[] - function updateMessage 
            - (ajax put)
[] - function getMessage 
            - (ajax get)
[] - function renderMessage(messages)
            - empty div $('#messageLog');
            - loop
            - let message = messages[i]
            - let $tr = $(`<tr></tr>`);
            $tr.data('message', messages);
            $tr.append(`<td>${}</td>`);
            $tr.append(`<td>${}</td>`);
            $tr.append(`<td>${}</td>`);    
            $tr.append(`<td><button class="btn-send">Send</button></td>`);
            $tr.append(`<td><button class="btn-delete">Delete</button></td>`);
            $('#messageLog').append($tr);

### SERVER
[]   const express = require('express);
[]  const router=express.Router();
[]  const pool = require('../modules/message');

[] - router.get // gets all books
            - `SELECT * FROM messages ORDER BY id;`
            -             
[] - router.post
            - 
            -        
[] - router.put
            - 
            -        
[] - router.delete
            - 
            -        

