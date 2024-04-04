const express = require("express");
const users = require("./MOCK_DATA.json");


// const path = require("path");
// app.set("views", path.join(__dirname, "/views"));   


const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/api/users", (req, res) =>
{
    res.json(users);
});

app.get("/users", (req, res) =>
{
    res.render("users.ejs", {users});
});

app.get("/api/users/:id", (req, res) =>
{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
});

app.listen(port, () =>
{
    console.log("Server Started");
})