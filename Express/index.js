const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("Hello From Home Page");
});

app.get("/about", (req, res) =>
{
    res.send("Hello From About Page" + " Hey, " + req.query.username + " you are " + req.query.age + " old.");
});

let port = 3000;

app.listen(port, () =>
{
    console.log("Service Started");
});
