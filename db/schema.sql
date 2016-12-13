BEGIN;

DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS "group";
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS user_admin_ref;

COMMIT;

BEGIN;

CREATE TABLE "user" (
  user_id SERIAL UNIQUE PRIMARY KEY,
  user_name VARCHAR(15) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  profile_pic VARCHAR NOT NULL,
  password VARCHAR(30) NOT NULL
);

CREATE TABLE post (
  post_id SERIAL UNIQUE PRIMARY KEY,
  post_text TEXT NOT NULL,
  image_url VARCHAR,
  group_id INT,
  user_id INT,
  prof_pic VARCHAR
);

CREATE TABLE "group" (
  group_id SERIAL UNIQUE PRIMARY KEY,
  group_name VARCHAR(30) NOT NULL,
  admin_id INT
);

CREATE TABLE members (
  group_id INT,
  user_id INT
);

CREATE TABLE user_admin_ref (
  user_id INT,
  admin_in INT
);

COMMIT;
