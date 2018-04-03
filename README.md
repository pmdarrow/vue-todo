# vue-todo

## Server

Built with:

* Flask (web server)
* Marshmallow (object serialization/deserialization)
* SQLAlchemy (ORM)
* Alembic (migrations)
* MySQL (database)


### Requirements

* python >= 3.6.0
* pipenv >= 11.9.0 (e.g. `brew install pipenv` on OS X)
* mysql >= 5.7.21

### Getting started

These instructions assume MySQL is running on `localhost:3306` with the `root` user available.

```
cd server

# Install dependencies
pipenv install

# Create DB
make create_db

# Run migrations
make run_migrations

# Seed database with initial data
make seed

# Run dev server
make run
```

## Client

Built with:

* Vue.js (UI framework)
* Vuex (state management)
* vue-router (routing)
* vue-cli (tooling)
* axios (HTTP client)

### Requirements

* node >= 8.6.0
* yarn >= 1.5.1

### Getting started

```
cd client

# Install dependencies
yarn install

# Run dev server
yarn serve
```
