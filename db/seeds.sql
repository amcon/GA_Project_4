BEGIN;

INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('abc123', 'abc123@gmail.com', 'https://i.ytimg.com/vi/oVXZTmi2ruI/maxresdefault.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('def456', 'def456@gmail.com', 'http://az616578.vo.msecnd.net/files/2016/03/07/6359296760565335581045924475_boston-terrier5.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('ghi789', 'ghi789@gmail.com', 'http://www.thepdxpitbullproject.com/wp-content/uploads/2011/12/black_white_pit_bull_wallpaper.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('jkl234', 'jkl234@gmail.com', 'http://petguide.com.vsassets.com/wp-content/uploads/2013/02/brussels-griffon1-668x441.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('mno567', 'mno567@gmail.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg', '12345');

INSERT INTO "group" (group_name, admin_id) VALUES ('Group 1 - Fluffy Buns', 1);
INSERT INTO "group" (group_name, admin_id) VALUES ('Group 2 - Dogs Anon.', 2);
INSERT INTO "group" (group_name, admin_id) VALUES ('Group 3 - Cutiezz', 1);

INSERT INTO members (group_id, user_id) VALUES (1, 1);
INSERT INTO members (group_id, user_id) VALUES (1, 3);
INSERT INTO members (group_id, user_id) VALUES (1, 5);
INSERT INTO members (group_id, user_id) VALUES (2, 1);
INSERT INTO members (group_id, user_id) VALUES (2, 2);
INSERT INTO members (group_id, user_id) VALUES (2, 3);
INSERT INTO members (group_id, user_id) VALUES (2, 4);
INSERT INTO members (group_id, user_id) VALUES (3, 1);
INSERT INTO members (group_id, user_id) VALUES (3, 4);
INSERT INTO members (group_id, user_id) VALUES (3, 5);

INSERT INTO user_admin_ref (user_id, admin_in) VALUES (1, 1);
INSERT INTO user_admin_ref (user_id, admin_in) VALUES (2, 2);

INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('This is my first post', 'http://www.frackfeed.com/wp-content/uploads/2016/08/donaldtrump_fracking_meme.jpg', 1, 1);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Yo, my second post', 'https://s-media-cache-ak0.pinimg.com/736x/0f/ca/94/0fca9410f129246c116d99b8d7791413.jpg', 1, 1);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('HEY GAIIS', 'https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg', 1, 3);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('ARF ARFF', 'https://s-media-cache-ak0.pinimg.com/736x/13/e0/ce/13e0cef23c4323e8d32be0e6322be99a.jpg', 1, 5);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Just kidding... I can talk', 'http://files.shandymedia.com/images/body/thesavory/weknowmemes.com_.jpg', 1, 5);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('This is a serious blog', 'http://blog.archive.org/wp-content/uploads/2016/10/leo2.png', 2, 1);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('I concur', 'https://thechive.files.wordpress.com/2016/07/5cac62b3c3b07cc981cc080d1364adc0.jpg?quality=85&strip=info&w=600&h=443&crop=1', 2, 2);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Wait... I dont want to', 'https://thechive.files.wordpress.com/2016/07/pokemon-go-has-evolved-into-a-lot-of-memes-32-photos-16.jpg?quality=85&strip=info', 2, 3);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Ugh, get him out', 'http://f.tqn.com/y/politicalhumor/1/S/B/_/6/mccain-palin-trump-face.jpg', 2, 4);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Hey ladies', 'https://cdn.pastemagazine.com/www/system/images/photo_albums/downton-abbey-memes/large/paste-tv-downton-abbey-memes-violet-tea.jpg?1384968217', 3, 2);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Ok.. pls stop', 'http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg', 3, 4);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Anyone want to date?', 'http://i.dailymail.co.uk/i/pix/2015/12/18/22/2F7E462E00000578-3366348-image-a-50_1450476544605.jpg', 3, 2);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('OMG', 'https://cdn.pastemagazine.com/www/system/images/photo_albums/stranger-things-memes/large/stranger-things-9.jpg?1384968217', 3, 4);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Id go on a date with you', 'https://s-media-cache-ak0.pinimg.com/originals/d3/a2/94/d3a294213df1dce65cf0b604e4dd30df.jpg', 3, 5);
INSERT INTO post (post_text, image_url, group_id, user_id) VALUES ('Whats your name?', 'http://www.wpromote.com/blog/wp-content/uploads/2015/06/morpheus-meme.jpg', 3, 5);

COMMIT;



