import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const public_folder_Path = path.join(__dirname, 'public');
console.log("This is public folder path ==>", public_folder_Path);

// Middleware to serve static files
app.use(express.static(public_folder_Path));



// this is EJS dynamic page with UserData
app.set('view engine', 'ejs');
app.get("/profile", (req, res) => {
    // like a Database  
    const user={
        name: "Satyajay",
        email: "Satyajaydibya9@gmail.com",
        number: 1234567890,
        skills:["C, C++","JavaScript","PHP","Node.js","Python"]
    }
    res.render(('profile'),{user});
});


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
    console.log("Server started on port", PORT);
});

