 const fs = require("fs") 

 /*fs.readFile("./docs/blog.txt", (err, data) => {
     if (err){
         console.log(err);
     } 
     console.log(data.toString());
 })*/ 

 /*fs.writeFile("./docs/blog.txt", "hello, world", () => {
     console.log("file was written");
 }) 
 fs.writeFile("./docs/blog2.txt", "hello, world", () => {
    console.log("file was written");
})*/ 

/*if (!fs.existsSync("./assets")) {
fs.mkdir("./assets",(err) => { 
    if (err) {
        console.log(err);
    } 
    console.log("folder created")
  });
} else {
 fs.rmdir('./assets', (err) => {
    if (err) {
     console.log(err)
    } 
  })
    console.log("file removed")
}*/ 

if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err)
        } 
        console.log("file deleted")
})
}