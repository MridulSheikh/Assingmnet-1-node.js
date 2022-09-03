const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/v1/users.route.js")
const fs = require("fs")
const port = 8000;

//middlewars
app.use(cors());
app.use(express.json())

app.use("/api/v1/user", userRoute);

async function run(){
    
}

run().catch(console.dir)
app.get('/',(req, res)=>{
    const html = fs.readFileSync('./public/index.html','utf8')
    res.send(html)
})

app.listen(port,()=>{
    console.log(`server runnig ${port}`)
})

process.on("unhandledRejection",(error)=>{
    console.log(error.name , error.message);
    app.close(()=>{
        process.exit(1);
    });
});