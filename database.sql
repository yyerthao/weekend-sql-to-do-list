CREATE TABLE messages(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
    "status" VARCHAR (80) DEFAULT 'Incomplete'
);

SELECT * FROM messages; -- this shows us the most updated table

INSERT INTO messages (id, task, status) -- this inserts a new row of information into table
VALUES (1, 'get groceries', 'Complete');

UPDATE messages SET status='Complete' WHERE id=1; -- this updates messages at id 1

INSERT INTO messages ("task", "status") 
VALUES ('eat candy', 'Complete');

SELECT * FROM messages ORDER BY "task"; -- this selects from messages table with organized order by task

DELETE FROM messages WHERE id=18; -- deletes from messages table with id 18
