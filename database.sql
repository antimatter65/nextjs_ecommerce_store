-- database
CREATE TABLE mixtapes (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  color varchar(30) NOT NULL,
  price NUMERIC NOT NULL,
  length varchar(30) NOT NULL
);
-- insert the values in to table created

INSERT INTO mixtapes
  (name, color, price, length)
VALUES
  ('The Green Mixtape', 'green', 9 , '90 minutes'),
  ('The Pink Mixtape', 'pink', 9 , '90 minutes'),
  ('The White Mixtape', 'white', 7, '90 minutes'),
  ('The Black Mixtape', 'black', 7, '90 minutes'),
  ('The Clear Neon Mixtape', 'clear', 15, '180 minutes'),
  ('The Blue Mixtape ', 'blue', 13, '180 minutes'),
  ('The Yellow Mixtape', 'yellow', 13, '180 minutes'),
  ('The Clear Mixtape','clear', 13, '180 minutes'),
  ('Retro Walkman', 'red', 35, 'N/A'),
  ('The Grey Mixtape','grey', 15, '180 minutes');