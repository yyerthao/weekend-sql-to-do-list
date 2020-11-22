
![MIT LICENSE](https://img.shields.io/github/license/yyerthao/weekend-sql-to-do-list)
![REPO SIZE](https://img.shields.io/github/repo-size/yyerthao/weekend-sql-to-do-list.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/yyerthao/weekend-sql-to-do-list.svg?style=flat-square)


## To-Do List Application

## Description

_Duration: 20 HOURS

Application that allows user to input task into input field. Click 'Mark as Complete' button as task is completed. Delete task as necessary. (Task will have a strike-through if 'Mark as Complete' button is clicked). User will have the option to mark task as 'Mark as Incomplete' 

## Screen Shot

![intro](todo.png)

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Postico] (https://eggerapps.at/postico/) (Recommended to test and run queries)

## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries 
3. Inside terminal, run following:
    * `npm install pg` to install Postgres
    * `npm install express` to install Express
    * `npm install jquery` to install Jquery
5. Run `npm start` after server is created to run application

## Usage

1. Write task into input field
2. Click submit
3. Once task is completed, click on button 'Complete'
4. If task is not thoroughly completed, click button 'Mark as Complete' to change task status back to 'Incomplete'.
5. Utilize delete button if task needs to be deleted.

## Built With

* HTML
* CSS
* JavaScript
* JQuery

## License
![MIT LICENSE](https://img.shields.io/github/license/yyerthao/weekend-sql-to-do-list)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at [maivyerthao@gmail.com]

