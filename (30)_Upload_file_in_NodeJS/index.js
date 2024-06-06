import express from "express";
import multer from "multer";

const app = express();

// postman url (http://localhost:5000/upload)

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },

        filename: function (req, file, cg) {
            //change file name (+ "-")
            // add Date in filename (+ Date.now())
            // to change file extension (+ ".jpg")
            cg(null, file.fieldname + "_" + Date.now() + ".jpg")
        }
    })
}).single("profile_image");

app.post("/upload",upload, async (req, res) => {
    res.send("File upload successful");
    console.log("File upload successful");
})



app.listen(5000, () => {
    console.log("Server is Started...!");
})
