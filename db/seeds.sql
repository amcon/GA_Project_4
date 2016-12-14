BEGIN;

INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('amcon', 'aconklinspam@gmail.com', 'https://pbs.twimg.com/profile_images/558812393095307266/QqVDf0aR.jpeg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('afaney', 'afane@gmail.com', 'https://images.bwwstatic.com/upload3/35678/89EE6D7E-F064-E882-E01FC5D0F14BCE9F.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('kaseface', 'kalfonso@gmail.com', 'http://s3.amazonaws.com/ataimages/crops/170737/1_cropped.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('heikabear', 'heika.a@gmail.com', 'https://pbs.twimg.com/profile_images/770472195269206021/vccMECIc.jpg', '12345');
INSERT INTO "user" (user_name, email, profile_pic, password) VALUES ('brookiecookie', 'brookesings@gmail.com', 'https://pbs.twimg.com/profile_images/588535551193649152/TpkVMvZE.jpg', '12345');

INSERT INTO "group" (group_name, admin_id) VALUES ('Cheeky Kiki', 1);
INSERT INTO "group" (group_name, admin_id) VALUES ('General Assembly People I like', 2);
INSERT INTO "group" (group_name, admin_id) VALUES ('Baes', 1);

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

INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('This is my first post', 'http://www.frackfeed.com/wp-content/uploads/2016/08/donaldtrump_fracking_meme.jpg', 1, 1, 'https://pbs.twimg.com/profile_images/558812393095307266/QqVDf0aR.jpeg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('HEY GAIIS', 'https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg', 1, 3, 'http://s3.amazonaws.com/ataimages/crops/170737/1_cropped.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('ARF ARFF', 'https://s-media-cache-ak0.pinimg.com/736x/13/e0/ce/13e0cef23c4323e8d32be0e6322be99a.jpg', 1, 5, 'https://pbs.twimg.com/profile_images/588535551193649152/TpkVMvZE.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Yo, my second post', 'https://s-media-cache-ak0.pinimg.com/736x/0f/ca/94/0fca9410f129246c116d99b8d7791413.jpg', 1, 1, 'https://pbs.twimg.com/profile_images/558812393095307266/QqVDf0aR.jpeg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Just kidding... I can talk', 'http://files.shandymedia.com/images/body/thesavory/weknowmemes.com_.jpg', 1, 5, 'https://pbs.twimg.com/profile_images/588535551193649152/TpkVMvZE.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('This is a serious blog', 'http://blog.archive.org/wp-content/uploads/2016/10/leo2.png', 2, 1, 'https://pbs.twimg.com/profile_images/558812393095307266/QqVDf0aR.jpeg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('I concur', 'https://thechive.files.wordpress.com/2016/07/5cac62b3c3b07cc981cc080d1364adc0.jpg?quality=85&strip=info&w=600&h=443&crop=1', 2, 2, 'https://images.bwwstatic.com/upload3/35678/89EE6D7E-F064-E882-E01FC5D0F14BCE9F.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Wait... I dont want to', 'https://thechive.files.wordpress.com/2016/07/pokemon-go-has-evolved-into-a-lot-of-memes-32-photos-16.jpg?quality=85&strip=info', 2, 3, 'http://s3.amazonaws.com/ataimages/crops/170737/1_cropped.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Ugh, get him out', 'http://f.tqn.com/y/politicalhumor/1/S/B/_/6/mccain-palin-trump-face.jpg', 2, 4, 'https://pbs.twimg.com/profile_images/770472195269206021/vccMECIc.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Hey ladies', 'https://cdn.pastemagazine.com/www/system/images/photo_albums/downton-abbey-memes/large/paste-tv-downton-abbey-memes-violet-tea.jpg?1384968217', 3, 2, 'https://images.bwwstatic.com/upload3/35678/89EE6D7E-F064-E882-E01FC5D0F14BCE9F.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Ok.. pls stop', 'http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg', 3, 4, 'https://pbs.twimg.com/profile_images/770472195269206021/vccMECIc.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Anyone want to date?', 'http://i.dailymail.co.uk/i/pix/2015/12/18/22/2F7E462E00000578-3366348-image-a-50_1450476544605.jpg', 3, 2, 'https://images.bwwstatic.com/upload3/35678/89EE6D7E-F064-E882-E01FC5D0F14BCE9F.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('OMG', 'https://cdn.pastemagazine.com/www/system/images/photo_albums/stranger-things-memes/large/stranger-things-9.jpg?1384968217', 3, 4, 'https://pbs.twimg.com/profile_images/770472195269206021/vccMECIc.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Id go on a date with you', 'https://s-media-cache-ak0.pinimg.com/originals/d3/a2/94/d3a294213df1dce65cf0b604e4dd30df.jpg', 3, 5, 'https://pbs.twimg.com/profile_images/588535551193649152/TpkVMvZE.jpg');
INSERT INTO post (post_text, image_url, group_id, user_id, prof_pic) VALUES ('Whats your name?', 'http://www.wpromote.com/blog/wp-content/uploads/2015/06/morpheus-meme.jpg', 3, 5, 'https://pbs.twimg.com/profile_images/588535551193649152/TpkVMvZE.jpg');

COMMIT;



