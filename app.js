const express = require("express") 
const app = express() 

app.set("view engine", "ejs"); 
//app.set("views", "otherFolderName") if you don't want to use /views for ejs

app.listen(3000)  

app.get("/", (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile("./views/index.html", {root: __dirname })
}); 
app.get("/about", (req, res) => {
    //res.send('<p>about page</p>'); 
    res.sendFile("./views/about.html", {root: __dirname })
}); 

app.get("/about-us", (req, res) => {
    res.redirect("/about");
}); 

app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname })
})