Automating context/provider creation for an app using CRUD. The goal is to avoid duplicate code for CRUD actions that will end up being the same or very similar. 

Local DB: https://github.com/cartond/json-server-blogposts

See `src/context/createDataContext.js` for source

See `src/context/BlogContext.js` for implementation 


`expo start` to run

For this we are also using json-server so:

`npm run db`

if you get errors, update the ports

`npm run tunnel`

Copy the link for your new db


* Warning - anytime you restart ngrok, your URL will change
* Warning - by default ngrok will only run for 8 hours. 
