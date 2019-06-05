# poetry-search-app
A react web-app which lets one search about a poetry and other details like it's author, lines, title and line count. 

# How to start:
Note: This project is created with <b>node v11.9.0</b> and <b>npm v6.5.0</b>

In order to start the project:

1. Clone/Download the workspace <br />
`$ git clone https://github.com/miralkumbhani/poetry-search-app.git`

2. Open the path in terminal for the workspace dependency injection <br />
`$ cd poetry-search-app`

3. Install project's dependencies <br />
`$ npm i`

4. Watches the files and uses liverload by default run `npm start`. Navigate to `http://localhost:3000`. 
The app will automatically reload if one changes any of the source files. <br />
`$ npm start`

# About the Application:
This application is made for displaying the basic concepts of react like props, states, accessing values from child to parent component and vice-versa, setting state, events in react, encapsulation and other concepts. It has a simple and clean UI for displaying the results. I've used an additional package named *react-toastify* for displaying success, info or error from the API response. The application will dislay results based on the selection of choice of search by either title, author, lines or line count and the search string that one enters. Both are required parameters for searching something and getting an appropriate output. If there are more than one results for one's search, a list of result will be displayed. On clicking the desired result, one can view all the details about that poem like poet, title, line-count and the lines of that poetry.

# About the API:
The API consumed is from the below resource: 
https://rapidapi.com

The API consumed is:
https://rapidapi.com/thundercomb/api/poetry-db
