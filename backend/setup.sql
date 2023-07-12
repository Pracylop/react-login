
CREATE DATABASE IF NOT EXISTS reactdb;

CREATE USER IF NOT EXISTS 'rausr'@'localhost' IDENTIFIED BY 'adm@reactdb';

GRANT ALL PRIVILEGES ON reactdb.* TO 'rausr'@'localhost';

USE reactdb;
CREATE TABLE login (id INT AUTO_INCREMENT PRIMARY_KEY, username VARCHAR(200), password VARCHAR(200), email VARCHAR(200));
INSERT INTO login (username, password, email) VALUES ('yousaf', '12345', 'matto@gmail.com');
