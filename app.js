
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./server/routes");
const multer = require ("multer");
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
const server = app.listen(3000, "localhost", function () {
  console.log(`Example app listening at http://localhost:${3000}`);
});
// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");

// const routes = require("./server/routes");
// const multer=require('multer');
// const fileStorageEngine=multer.diskStorage({
//   destination:(req , res , cb)=>{
//     cb(null ,'./images')},
//   filename:(req, file ,cb)=>{
//     cb(null,Date.now()+'--'+file.originalname)
//   },
// });
// let upload=multer({storage:fileStorageEngine});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/", routes);
// app.post('/postimage/image',upload.single('file'),(req,res)=>{
//   console.log(req.file);
//   res.send('images added successfully');
// })
// const server = app.listen(3000, "localhost", function () {
//   console.log(`Example app listening at http://localhost:${3000}`);
// });
