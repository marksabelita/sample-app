# Installing and running the application

This project requires Docker to be installed in your local machine to install and run the Postgres database.

Please check the docker installation page to install the docker based on your OS.

https://docs.docker.com/engine/install/


# Backend Details

The Application is Built using NestJS Framework, Docker.

The Database is using Postgres and TypeORM as ORM.

For API management we are using Swagger. 

Local backend Development: 
http://localhost:3000 

Swagger Documentation: 
http://localhost:3000/swagger


# Running the application

Installing the  backend application
```
npm install
```

After installing make sure to run your local Postgres database or you can use docker to run your local Postgres environment to do so.

Installing Postgres using Docker.
```
npm run start:dev:db
```

Once Database is setup and working we need to run the migration to create tables for the database.


Running the Database migration.
```
npm run migrate:up
```

Rolling back database migration.

```
npm run migrate:down
```

To run the application locally we can run
```
npm run start
```


# Frontend Details
The application is built in NextJS Framework.

State management used is Redux.

Side effect management used is Redux Thunk.

CSS Framework used is Tailwind


Local frontend Development: 
http://localhost:3001


Installing the frontend application
```
npm install
```

To run the application we can run 
```
npm run start
```


# SAMPLE APP RUNNING ON LOCAL MACHINE


https://user-images.githubusercontent.com/43874093/234219503-015f71dc-1739-48c6-b203-5ea11df08b4b.mp4


