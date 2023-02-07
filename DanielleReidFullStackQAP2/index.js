const http = require("http");
const route = require("./routes");

// file based text/html
const server = http.createServer((req, res) => {
  let path = "./views/";
  console.log(req.url, req.method);
  switch (req.url) {
    case "/404":
      path += "404.html";
      res.statusCode = 404;
      route.fourOFourP(path, res);
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      route.aboutP(path, res);
      break;
    case "/aussiedoodles":
      path += "aussiedoodles.html";
      res.statusCode = 200;
      route.aussiedoodlesP(path, res);
      break;
    case "/dalmatians":
      path += "dalmatians.html";
      res.statusCode = 200;
      route.dalmatiansP(path, res);
      break;
    case "/poodles":
      path += "poodles.html";
      res.statusCode = 200;
      route.poodlesP(path, res);
      break;
    case "/pugs":
      path += "pugs.html";
      res.statusCode = 200;
      route.pugsP(path, res);
      break;
    default:
      path += "index.html";
      res.statusCode = 200;
      route.indexP(path, res);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
