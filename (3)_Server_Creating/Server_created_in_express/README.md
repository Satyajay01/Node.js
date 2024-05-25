# First project

step 1: create index.js file and add sum codes to create server.

        const express = require('express');

        const server = express();
        server.listen(8080);

        console.log("Server start ho gaya...! ");




step 2: open in terminal

step 3: npm init

step 4: npm i express (express is a node.js framework to create server)

step 5: npm i nodemon (nodemon like a live server nodemon)

step 6: Configure your package.json file

        "scripts": {
            "dev": "nodemon index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },



