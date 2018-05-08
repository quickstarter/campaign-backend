CREATE SCHEMA quickstarter
  CREATE TABLE quickstarter.projects (
    id BIGSERIAL PRIMARY KEY,
    title TEXT,
    creator TEXT,
    backers INT
  )

  CREATE TABLE quickstarter.users (
    id BIGSERIAL PRIMARY KEY,
    name TEXT,
    city TEXT,
    country TEXT,
    avatar TEXT,
    projects_backed INT
  );

  CREATE TABLE projects_backers (
    project INT REFERENCES quickstarter.projects ON DELETE CASCADE,
    backer INT REFERENCES quickstarter.users ON DELETE CASCADE
  );