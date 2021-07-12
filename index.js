  
var Express=require("express");
var app=Express();
var path=require("path");
var m=path.join(__dirname+"../img");
app.use(Express.static('views/img')); 
const hbs=require("hbs");
const port=process.env.PORT || 8000;

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("portfolio");
})
app.get("/home",(req,res)=>{
    res.render("portfolio");
})
app.get("/skill",(req,res)=>{
    res.render("skills.hbs");
})
app.get("/about",(req,res)=>{
    res.render("About");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.listen(8000,()=>{
    console.log("listening bro");
})
