# Croo Technical Challenge

This application open a web page where users can write and enter comments inside.
The frontend is developed with React.js and the backend with the python librairy Flask.

This application needed to follow 5 requirements given by Croo:

1-Comments should be stored in a database.
2-Comments should be displayed in real time for all users.
3-A comment history should be displayed, and users should be able to see the comments that were left
before they opened the app.
4-The name of a commenter should be a mailto link to their email address.
5-The project must be delivered via Docker. You can either use docker-compose,
or put everything in the same container with an entrypoint script.
No matter which option you choose, your app should be fully operational with only one terminal command.

This application unfortunately doesn't respect all those objectives. The comments are stored in a database and all the comments are diplayed on the web page. But it is not displayed in real-time and it is not delivered with docker. Discovering React and Flask took a lot time to learn so entering such features as real time displaying and learning how work docker were not in able with a delay of one week. Also, mailto link doesn't work but each name contain the email that were used to enter the comment. I used SQLlite as the database. MySQL or PostgreSQL should have been a been prioritized but I used what fited the most for me. In th api.py file no route was created to delete or update a Comment object. These routes could have been done but the lack of time made that it was not implemented.

# How to start the app

To start the app, you need to open 2 command prompt. In the first one, you need to be in tha api folder and then enter the 2 next commands:

\venv\Scripts\Activate
python ./api.py

In the second command prompt, you nee to be in my-app folder and enter npm start. The app should open right after this action.

It should have need only one command line to open the app but due to the lack of time this feature hasn't been developped.

# Bootstrap

The css file have been downloaded from bootswatch here's the link below:

https://bootswatch.com/lux/

What is below this line was added when I created the react application.
-------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
