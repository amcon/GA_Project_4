BEGIN;

DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS group;
DROP TABLE IF EXISTS member;

COMMIT;

BEGIN;

CREATE TABLE "user" (
  user_id SERIAL UNIQUE PRMARY KEY,
  user_name VARCHAR(15) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  profile_pic VARCHAR NOT NULL,
  password VARCHAR(30) NOT NULL
);

CREATE TABLE post (
  post_id SERIAL UNIQUE PRIMARY KEY,
  post_text TEXT NOT NULL,
  image_url VARCHAR,
  group_id FOREIGN KEY REFERENCES group(group_id),
  user_id FOREIGN KEY REFERENCES user(user_id)
);

CREATE TABLE group (
  group_id SERIAL UNIQUE PRIMARY KEY,
  group_name VARCHAR(30) NOT NULL,
  admin_id FOREIGN KEY REFERENCES user(user_id)
);

CREATE TABLE members (
  member_id SERIAL UNIQUE PRIMARY KEY,
  group_id FOREIGN KEY REFERENCES group(group_id),
  user_id FOREIGN KEY REFERENCES user(user_id)
);

COMMIT;
