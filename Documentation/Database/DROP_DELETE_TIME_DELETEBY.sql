alter table application drop column delete_time;
alter table application drop column delete_by;

alter table organization drop column delete_time;
alter table organization drop column delete_by;

alter table project drop column delete_time;
alter table project drop column delete_by;


alter table user drop column delete_time;

alter table user_organization drop column delete_time;


