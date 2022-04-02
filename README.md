# Make your poll

System to generate your poll 🚀.

### Requeriments

- [x] 1 - A user can come to the webpage and create a new poll.
- [x] 2 - The user should be able to specify a title for the poll, a brief description, and a list of options.
- [x] 3 - After the poll is created, the user should be able to edit the poll, and modify anything they specified originally.
- [x] 4 - After the poll is created, the user should be able to share their poll with their friends. This can be as simple as generating a link that they can have other people go to to respond to the poll.
- [x] 5 - The user should be able to view a graph of the responses to their poll.
- [ ] 6 - A user responding to a poll should be able to edit their response. (You do not need to authenticate users attempting to edit responses)
- [x] 7 - A user should be able to create an account that they can authenticate to with a username and password.
- [x] 8 - The only information you need is a username and password. If email addresses are usernames, you do not need to validate the email address.
- [x] 9 - Passwords must be securely stored.
- [x] 10 - Rate-limiting of authentication requests and account lockout do not need to be implemented.
- [x] 11 - A user should be able to associate all of their previously created polls with that account.
- [x] 12 - The user, when authenticated, should be able to view all of the polls associated with their account.
- [ ] 13 - The user should be able to require all respondents to their polls authenticate before being able to respond to the poll.

#### Extras

- [ ] Close a poll. The user to create a poll can finish a poll and nobody can access to answer.
- [ ] Shows the adherence of responses over the days through a graph on a poll's viewing screen

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

### Previews

#### Answer poll

![Peek 01-04-2022 14-43](https://user-images.githubusercontent.com/15862643/161315135-35b15507-b2b6-4d55-bd62-6186314acaf1.gif)

#### Manager poll

![Peek 01-04-2022 15-27](https://user-images.githubusercontent.com/15862643/161321394-335c72ff-53a3-4c1f-8bde-95bf0098d88c.gif)

