# MyReads Project

This is the MyReads Project for the React Nanodegree Program, my name is João Pedro de Salles Braga and this is my final project!
The project is located in a repository at github.com, and can be accessed via this [`LINK`](https://github.com/jaopsb/reactnd-project-myreads-starter).

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains the components os the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookShelf.js # Component that discribes the shelfs that will be used in the App.
    ├── Book.js # Component of a single book, which is used in the BookShelf component.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookPage.js # The page that list the shelves of the user, with its respective books.
    ├── SearchPage.js # Component of the search page that communicates with the BooksAPI to receive new books.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## The Front End
This project consists in a app that manage Books for a user that wants to get his/hers reading up to date.To make this works, there were projected 3 shelves for the user sort the books he(she) is currently reading,want to read or already read, and a page for the user to search for new books and add to his/hers library. The magic of React comes in light when we face the challenge of creating such app that we can evolve without much rework. Thinking about the shelf, only 3 was proposed, so even if was to create only one Html file, 3 static components wouldn't be so long to write and maintain, but it would still be static, and the rework to always rewrite a html file to add new books is a little bit insane. With React we divide the Components that makes the app in small components,to scale the project, so if now we want 4 shelves, just add a new <BookShelf> into the App.js.
That is for this app:

  * App.js - This is the root of the app.It calls and uses the other components and
    the App calls the React Router to route the components BookPage and SearchPage.
  * BookShelf.js -Component that discribes the shelfs that will be used in the App.
  * Book.js -Component of a single book, which is used in the BookShelf component.
  * BookPage.js -The page that list the shelves of the user, with its respective books.
  * SearchPage.js -Component of the search page that communicates with the BooksAPI to receive new books.
  * BooksAPI.js -A JavaScript API for the provided Udacity backend. Instructions for the methods   are below.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Running the program

To run the program, clone the git repository to your local machine and use 'npm install' and then 'npm start' and voila! The app is running!

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
