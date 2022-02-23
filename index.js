//imports express into app
const express = require("express");
//runs express as server
const app = express();

//to make sure app is running
app.listen(3030, () =>{
  console.log("Server running on port 3030")
});
