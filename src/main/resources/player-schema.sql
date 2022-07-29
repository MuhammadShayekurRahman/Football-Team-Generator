drop table if exists player CASCADE;
create table player (
id integer not null auto_increment primary key, 
first_name varchar(255), 
position varchar(255), 
shirt_number integer, 
surname varchar(255), 
team_name varchar(255)
);
