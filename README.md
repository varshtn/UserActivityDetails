## User Activity Details
========================

This project was  bootstrapped  with Create React App.

Below you will find some information on how to perform common tasks.
======================================================================

## 1.Updating to New Releases

npx create-react-app my-app  is a global command-line utility that you use to create new projects

When you run npx create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.

## 2.Folder Structure

After creation, your project should look like this:

my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
	
	
For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, or Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## 3.Available Scripts

In the project directory, you can run:

## `npm start --port=3001`
Runs the app in the development mode.
Open http://localhost:3001 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## `npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## 'npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## `npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## 4.Installing a Dependency

The generated project includes
dependencies": {
    "@date-io/date-fns": "^1.3.13",
    "@material-ui/core": "^4.9.8",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/pickers": "^3.2.10",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "date": "^1.0.2",
    "date-fns": "^2.11.1",
    "json-server": "^0.16.1",
    "moment": "^2.24.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1"
  },
 It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with npm:

npm install --save <library-name>

## 5.Importing a Component


This project setup supports ES6 modules ,
While you can still use require() and module.exports, I'm using  import and export instead.


In this project I'm creating three components 

1.HeaderComponent
2.FooterComponent
3.UserDetailsComponent

In HeaderComponent I have used simple App bar from material-ui

In UserDetailsComponent I have used customized tables from material-ui [@material-ui/core/Table] for displaying the user details 

For calender I have used material-ui date picker [@material-ui/pickers provides date picker]
Date pickers  provide a simple way to select a single value from a pre-determined set.

I have used Contained Buttons from material-ui[@material-ui/core/Button] , once the user selects the date from calender when clicks on the button it will display the appropriate user activity details

For displaying the user activity details I have used customized dialogs from material-ui [@material-ui/core/Dialog] , to make it more readable again a table inside dailog which display user actvity period that is start_time and end_time
 
I have created services folder which contains UserService.js file , which does the work of making api call.

I have used Axios as a HTTP client for making HTTP Requests

Axios is a promise based HTTP client for making HTTP requests from a browser to any web server.

## Features:

Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
Client side support for protecting against XSRF

## Installing:

Using npm:

$ npm install axios

I have created static folder which has css sub folder that contains UserDetailsComponent.css file for adding style to respective components

This project setup uses Webpack for handling all assets.
Webpack offers a custom way of “extending” the concept of import beyond JavaScript.
To express that a JavaScript file depends on a CSS file, you need to import the CSS in the JavaScript file

For using a mock Api , we are using json-server utility hosted as a separate heroku project 

Api server is  hosted on heroku and Api can be accessed through  https://json-server-user-details.herokuapp.com/members


 
 



