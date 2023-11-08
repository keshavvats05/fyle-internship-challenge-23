# Github user details
This is a single-page angular app that allows user to enter the GitHub username and the it extracts the user data using Github API.
This app has paginations that allow users to navigate from one page to another, by default each page contains 5 repositories.
# Error handling
when the user enters an invalid username, this app catches the error message thrown by GitHub API and displays that the username is not found!
There are certain limits to using the GitHub API if the user exceeds the limit, the API requests will fail and the user need to wait until they are allowed to make API requests again

## Installation
### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).
