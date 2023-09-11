-- Insert mock data into the todouser table
INSERT INTO todouser (username, password, passwordsalt)
VALUES
    ('user1', 'password1', 'salt1'),
    ('user2', 'password2', 'salt2'),
    ('user3', 'password3', 'salt3'),
    ('user4', 'password4', 'salt4'),
    ('user5', 'password5', 'salt5');

-- Insert mock data into the todo table
INSERT INTO todo (userid, todoheader, todoinfo)
VALUES
    (1, 'Task 1', 'Description of Task 1'),
    (1, 'Task 2', 'Description of Task 2'),
    (2, 'Task 3', 'Description of Task 3'),
    (2, 'Task 4', 'Description of Task 4'),
    (3, 'Task 5', 'Description of Task 5'),
    (3, 'Task 6', 'Description of Task 6'),
    (4, 'Task 7', 'Description of Task 7'),
    (4, 'Task 8', 'Description of Task 8'),
    (5, 'Task 9', 'Description of Task 9'),
    (5, 'Task 10', 'Description of Task 10');
