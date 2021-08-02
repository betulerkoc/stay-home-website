# Project

Now that we have finished implementing the initial code base, you'll work on it to apply your own ideas

## Requirement

- The backend should be connected to frontend through REST API
- The project should have at least one POST, one GET and one DELETE requests, PATCH is optional
- Uses sequelize to connect to the database
- Uses passport.js for authentication

## Process

We will be following a standard open-source development process:

- Fork the repository so everyone has a place to merge their changes - this will be your team's "official" repository. Pick someone from your team to do this - you only need one.
- Invite your teammates.
- Invite us (either by username on github or by sending me an invite link via Slack).
- Decide how to separate the work during sprint planning.
  -` Each person should create a self-contained pull request (remember that commits to your repository should not leave it in a broken state).
- Have your teammates review your pull request.
- Once you are ready, send me your PR and I will give you a code review.

## Project Guidelines

You will be assigned a group that you will work with throughout the project.

**1.) UI Flows / Mocks (Drawings)**

Sketch each page of the website (like the new Profile page - there is a "view" and "edit" version - you should sketch them out to help validate you haven't forgotten any important elements). Don't worry about how it looks - only worry about _what_ the page displays or does - and what other pages are reachable from it.

For each page:

- Give it a name
- Describe its purpose
- Identify all data-driven content, form elements, and any other dynamic content.
- Identify any required navigational aids (links to other pages)
- If the page is functional in any way, describe its functions.

**Example:**

```
The Landing Page`

The landing page welcomes the user to the website and allows them to sign in or sign up.

The page contains both the sign-in and sign-up forms.

The sign-in form has fields for:
- username (text)
- password (password)

The sign-up form has fields for:
- username (text)
- password (password)
- password confirmation (password)

When the user signs in or up they are brought to the Recent Posts page.
```

**2.) Design Data Schemas (Diagrams)**

Based on the UI Flows and the list of what dynamic content the site needs to display, design a database schema to store your application's data.

Include any foreseeable queries you might need.

For example, you will need to store the user's first and last name - how will you change the database to allow this?

**Example:**

```
users
  - primary key: id (string)
  - username (string, unique, not null)
  - passwordHash (string, not null)

posts
  - primary key: id (string)
  - title (string, not null)
  - body (string, not null)
  - date (number)

Find a user by username:
SELECT * FROM users WHERE username == __

Find a post by id:
SELECT * FROM posts WHERE id == __
```

**3.) Design Web Service Endpoints (data & HTML) (Documentation)**

Based on the UI Flows, and the Data Schema, what data endpoints will you need? What are your HTML endpoints? Do they require any URL or querystring parameters?

You should build a list that looks like this:

**Example:**

```
- Users
  - POST /users/logins { username: string, password: string }
  - POST /users { ... }

- Posts
  - GET / (An HTML endpoint which lists all posts)
  - GET /:id (An HTML endpoint which displays a post)
```

**4.) Client Side Technologies / Styling (Documentation)**

What technologies will you use on the client side? Is everyone comfortable with that choice? I suggest keeping it very simple.

**5.) Implement Client Side w/ Mocks**

Implement the client side using mocks.

**6.) Implement Server Side w/ Mocks**

Implement the data APIs using mocks for the data store.

**7.) Implement Data Store**

Implement the data APIs using mocks for the data store.

**8.) Celebrate**

Mabrook! I hope this is the start of an exciting journey for you!
