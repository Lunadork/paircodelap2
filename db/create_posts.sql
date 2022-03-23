DROP TABLE IF EXISTS posts;

CREATE TABLE posts
(
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    author varchar(100) NOT NULL,
    content varchar(500) NOT NULL
)