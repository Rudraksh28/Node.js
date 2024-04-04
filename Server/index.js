const http = require("http");

const fs = require("fs");

const url = require("url");

// const myServer = http.createServer((req, res) =>
// {
//     console.log("Request Rec.");
//     console.log(req.headers);
//     res.end("Hello From Server");
//     console.log(`Broswer Using : ${req.headers["user-agent"]}`);
// });

const myServer = http.createServer((req, res) =>
{
if(req.url === "/favicon.ico")
{
    return res.end();   
}
    // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const log = `${Date().toLocaleString()} ,${req.url}, New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, result) =>
    {
        switch(myUrl.pathname)
        {
            case "/":
                res.end("HomePage");
            break;
            case "/about":
                const userName = myUrl.query.myname;
                if(userName === undefined || search_query === "")
                {
                    res.end("About us page");
                }
                else
                {
                    res.end(`Hi ${userName}`);
                }
            break;
            case "/search":
                const search_query = myUrl.query.search_query;
                if(search_query === undefined || search_query === "")
                {
                    res.end("Random Video (Youtube Home Page)");
                }
                else
                {
                    res.end("Here are the video related to" + search_query);
                }
            break;
            default:
                res.end("404 Not Found");
        }
    });


});

let port = 3000;

myServer.listen(port, () =>
{
    console.log("Service Started");
});