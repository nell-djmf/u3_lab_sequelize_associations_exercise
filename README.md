# Associations Exercise

## Getting Started

- Fork and Clone
- npm install
- npm run test (Ensure that everything was installed correctly)
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

## Overview

We'll be practicing associating the provided models. Foreign Keys have already been set up for you in the migrations. To confirm this open `psql` and connect to `associations_development`. Verify the schema is setup and the tables were created successfully. You'll only be working in the `User` and `Article` models.

The associations are as follows:

- User has many Articles as creator
- Article belongs to User as creator
- User has many Articles as bookmarks through UserBookmark
- Article has many User as bookmarks through UserBookmark

## Lab

You'll need to setup the associations in the respective model in order for the queries to complete correctly. Run `npm run test` to check your work. If everything was done correctly all tests should pass.
