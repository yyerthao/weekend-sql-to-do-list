(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/yyerthao/weekend-sql-to-do-list)
![REPO SIZE](https://img.shields.io/github/repo-size/yyerthao/weekend-sql-to-do-list.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/yyerthao/weekend-sql-to-do-list.svg?style=flat-square)


# PROJECT NAME

## Description

_Duration: 10 HOURS

Create user interface application that allows user to input task onto browser. Buttons are available for user to delete task, mark task as completed, or revert task back to incomplete status.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `weekend-to-do-app`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Submit task into input form
2. Click submit
3. Once task is completed, click on button 'Mark as Complete'
4. If task is not thoroughly completed, revert status of task back to 'Mark as Complete' by click on
button that reads 'Mark as Incomplete'
5. Utilize delete button once task is completed


## Built With

* VS Code
* Node.js
* Express
* PostGres



## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at [maivyerthao@gmail.com]