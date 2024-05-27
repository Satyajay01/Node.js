# Express and Nodemon


step 1: create index.js file and add sum codes to create server.

        const express = require('express');

        const server = express();
        server.listen(8080);

        console.log("Server start ho gaya...! ");


step 2: open in terminal

step 3: npm init

# Express
step 4: npm i express (express is a node.js framework to create server. It is used to build single-page, multi-page, and hybrid web applications. It is also used to build APIs. Express is an open-source framework that is developed and maintained by the Node.js foundation.)

# Nodemon
step 5: npm i nodemon (nodemon like a live server nodemon)

step 6: Configure your package.json file

        "scripts": {
            "dev": "nodemon index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },



