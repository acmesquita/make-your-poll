# Make your survey

System to generate your poll 🚀.

### Requeriments

- [x] 1 - A user can come to the webpage and create a new poll.
- [x] 2 - The user should be able to specify a title for the poll, a brief description, and a list of options.
- [x] 3 - After the poll is created, the user should be able to edit the poll, and modify anything they specified originally.
- [x] 4 - After the poll is created, the user should be able to share their poll with their friends. This can be as simple as generating a link that they can have other people go to to respond to the poll.
- [x] 5 - The user should be able to view a graph of the responses to their poll.
- [ ] 6 - A user responding to a poll should be able to edit their response. (You do not need to authenticate users attempting to edit responses)
- [ ] 7 - A user should be able to create an account that they can authenticate to with a username and password.
- [ ] 8 - The only information you need is a username and password. If email addresses are usernames, you do not need to validate the email address.
- [ ] 9 - Passwords must be securely stored.
- [ ] 10 - Rate-limiting of authentication requests and account lockout do not need to be implemented.
- [ ] 11 - A user should be able to associate all of their previously created polls with that account.
- [ ] 12 - The user, when authenticated, should be able to view all of the polls associated with their account.
- [ ] 13 - The user should be able to require all respondents to their polls authenticate before being able to respond to the poll.

### Technologies

- Ruby on Rails - backend api
- NextJS - frontend

### Getting Started

In this project to be using docker and docker-compose to up applications.

### Build project

```bash
docker-compose build
```

### Initilize Database

```bash
docker-compose run --rm api bundle exec rails db:create
docker-compose run --rm api bundle exec rails db:migrate
```

### Running projects

```bash
docker-compose up
```

If all that's rigth, you having a database, an api and a web running. For try access:

- API: http://localhost:3000/api/v1/hello
- Web: http://localhost:3001
