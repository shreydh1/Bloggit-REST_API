alter table bookmarks add column created_on datetime not null default NOW();
alter table bookmarks add column created_by text DEFAULT 'Shrey';
alter table bookmarks add column last_updated datetime not null DEFAULT NOW();
