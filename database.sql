-- 1. Create table on POSTICO
CREATE TABLE books(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
    "status" VARCHAR (80) DEFAULT 'Complete'
);

-- 2. This command will show us our entire table with
SELECT * FROM messages;

-- 3. Test adding value into table with
INSERT INTO messages (id, task, status)
VALUES (1, 'get groceries', 'Complete');

INSERT INTO messages ("task", "status")
VALUES ('eat candy', 'Complete')

