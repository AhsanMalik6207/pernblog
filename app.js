const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./server/routes");
const multer = require ("multer");
const { default: file } = require("babel-core/lib/transformation/file");
const req = require("express/lib/request");
const res = require("express/lib/response");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './images')},
    filename:(req, file, cb) =>{
      cb(null,Date.now() + '--' + file.originalname)
    }
});
// middleware
const upload = multer({storage:fileStorageEngine})
 // routes
app.post('/userprofiles/image',upload.single('picture'),(req, res)=>{
  console.log(req.file);
  res.send('Image upload Successfully');
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
app.get('*', (req, res) => res.send('welcome to home page here'));
const server = app.listen(3005, "localhost", function () {
  console.log(`Example app listening at http://localhost:${3005}`);
});
