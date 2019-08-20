DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE `users` (
  `id` VARCHAR(8),
  `username` VARCHAR(32),
  `password` VARCHAR(32),
  PRIMARY KEY (`id`)
);

CREATE TABLE `posts` (
  `username` VARCHAR(32),
  `title` VARCHAR(128),
  `post` VARCHAR(10000),
  `date` DATETIME
);