import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, './public');
console.log("This is public folder path ==>",publicPath);


app.use(express.static(publicPath));



app.listen(PORT, () => {
    console.log("Server is Started...!");
});
