import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const public_folder_Path = path.join(__dirname, './public');
console.log("This is public folder path ==>",public_folder_Path);

// All pages-------
app.get("",(req, res)=>{
    res.sendFile(path.join(public_folder_Path, 'index.html'));
});

app.get("/about",(req, res)=>{
    res.sendFile(path.join(public_folder_Path, 'about.html'));
});

app.get("/contacts",(req, res)=>{
    res.sendFile(path.join(public_folder_Path, 'contacts.html'));
});

// 404 page
app.get("*",(req, res)=>{
    res.sendFile(path.join(public_folder_Path, 'Page_not_found.html'));
});



app.listen(PORT, () => {
    console.log("Server is Started...!");
});
