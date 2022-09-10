# justice league vs avengers

![license badge](https://img.shields.io/badge/license-MPL2.0-brightgreen.svg)

## Description

The age-old questions: Marvel or DC Comics? Avengers or Justice League? Who will win? Wouldn't you like to come and see which team will be left standing?

We wanted to create an application to allow users utilize a blog application to defend their champions and heroes. The users will be able to create blog posts, access all blog posts, edit their blog posts by updating or deleting the posts, and comment on any blog posts. The users will be required to sign in to perform all of the functions listed besides accessing all of the blog posts. At the end of the day, the users may choose to log out of the blog for security.

You may find the link to the deployed application [here](https://justice-league-vs-avengers.herokuapp.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)
- [Credits](#credits)

## Installation

If you would like to access the app via localhost, you will first need to install the node modules after cloning this repository with the following code:

```
npm i
```

After that, the node modules will be installed.

Before launching the application via localhost, you will need to edit and add to the ".env.EXAMPLE" file with the following steps:

1. Change the ".env.EXAMPLE" file name to ".env"
2. Fill out the ".env" file by adding your MYSQL username, password, and your session key. Please find an example below:

```
DB_USER="temp username"
DB_PASSWORD="temp password"
DB_NAME=marvel_battlefield_db
SESSION_SECRET="your session secret key"
```

The database name will be left as it is as you will be accessing the application's database. If you would like to change the database name, the database names in the .env.EXAMPLE and schema.sql files will need to be changed as well.

Next, you will need to create the database by running the following code in MYSQL from your main branch, which will load the schema.sql:

```
source db/schema.sql;
```

Then, you will need to run the following code on your main branch in your terminal or Git Bash:

```
npm run seed
```

Finally, you run the following code to start the localhost or via nodemon respectively:

```
npm start
```

or

```
npm run watch
```

With all of the steps above, you can visit [http://localhost:3001](http://localhost:3001) to access the application.

## Usage

You may find a video walkthrough showcasing the application deployed on Heroku [here](https://youtu.be/b9gedW4CJQQ).

## Questions

If you have any questions, please feel free to reach me at:

- GitHub: Yahplee
- Email: [alee68@fordham.edu](mailto:alee@fordham.edu)

## Credits

Collaborators

- Denise Yin: Click [Here](https://github.com/dy2395) for her GitHub profile
- Muhammad Azam: Click [Here](https://github.com/Coding291) for her GitHub profile
- Muhammad Scheroz: Click [Here](https://github.com/mshehroz237) for her GitHub profile
- Jeremiah Vega: Click [Here](https://github.com/jmvega316) for her GitHub profile

## License

This project is nested under the following license: MPL2.0

## Credits

Copyright © Yahplee All rights reserved.
