var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <DOCTYPE html>
    <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MyPage – 12345678</title>
</head>
<body>
  <h1>Hi, I'm Yameen</h1>
  <h2>Computer Science @ Goldsmiths (Year 3)</h2>
  <p>
    I am a third year computer science student, I enjoy playing sports such as boxing and football.
  </p>
</body>
</html>
    

`);

//comment
}).listen(port, function () {
  console.log(`MyPage running at http://localhost:${port}`);
});
    






