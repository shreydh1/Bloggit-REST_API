CREATE TABLE bookmarks(
bookmark_id bigserial primary key auto_increment,
title text not NULL,
url text not NULL,
is_visible bit,
priority integer
);